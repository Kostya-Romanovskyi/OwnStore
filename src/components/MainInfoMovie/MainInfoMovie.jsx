import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { pathBack } from "../../Redux/Slices/PathSlice"
import PosterError from '../../assets/ErrorPoster.jpg'
import { movieById } from "../../Redux/Slices/MovieById"
import MainButton from "../MainButton/MainButton"
import { TitleWrapp, BackButton, Title, Status, ImgMobile, OverviewStyled, MobileButtons, StyledButton, ButtonsContainer, Img, GenresList, GenresItem, GenresText, PosterWrapper, Plug } from "./MainInfoMovie.styled"
import { useEffect, useState } from "react"
import { imagesEl } from "../../Redux/Slices/ImagesSlice"
import TrailerModal from "../Modal/Modal"

import GallerysSwiper from "../GallerysSwiper/GellarysSwiper"
import { addFirebaseData, deleteFirebaseData } from "../../APIs/LibraryAPI"
import { firebaseLibrary } from "../../Redux/Slices/FireBaseLibrarySlice"
import { fetchFirebaseData } from "../../APIs/LibraryAPI"
import { authInfo } from "../../Redux/Slices/AuthSlice"



const MainInfoMovie = () => {
    const [addBtn, setAddBtn] = useState(false)
    const [deleteBtn, setDeleteBtn] = useState(true)

    const { movieId } = useParams()
    const { title, status, genres, poster_path, overview, vote_average, release_date } = useSelector(movieById)


    const dispatch = useDispatch()

    const librarySel = useSelector(firebaseLibrary)

    const authInfoSel = useSelector(authInfo)

    const location = useLocation()
    const backPath = useSelector(pathBack)
    const imagesSel = useSelector(imagesEl)

    useEffect(() => {
        librarySel.data && librarySel.data.map((movie) => {
            if (movieId === movie.movieId) {
                console.log(movie.inLibrary)
                setAddBtn(movie.inLibrary)
                setDeleteBtn(false)
            }
        })
    }, [authInfoSel.uid, dispatch, librarySel.data, movieId])

    useEffect(() => {
        dispatch(fetchFirebaseData(authInfoSel.uid))

    }, [authInfoSel.uid, dispatch])

    const handleAddMovie = () => {
        dispatch(addFirebaseData({ uid: authInfoSel.uid, movie: { title, status, genres, poster_path, overview, movieId, vote_average, release_date, inLibrary: true } }))
        setDeleteBtn(false)
        dispatch(fetchFirebaseData(authInfoSel.uid))
    }

    const handleDeleteMovie = () => {

        librarySel.data && librarySel.data.map((oneMovie) => {

            if (movieId === oneMovie.movieId) {
                dispatch(deleteFirebaseData({ uid: authInfoSel.uid, id: oneMovie.id }))

                setAddBtn(false)
                setDeleteBtn(true)

                dispatch(fetchFirebaseData(authInfoSel.uid))
            }
        })
    }

    return (<>

        <TitleWrapp>
            <BackButton to={backPath?.pathname + backPath?.search ? backPath?.pathname + backPath?.search : '/'}>Go back</BackButton>
            <Title>{title}</Title>
            <Status props={status}>{status}</Status>

            <ImgMobile src={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : PosterError} alt={title} />

            <GenresList>
                {genres && genres.map(({ id, name }) => {
                    return (<GenresItem key={id}>
                        <GenresText>{name}</GenresText>
                    </GenresItem>)
                })}

            </GenresList>

            <OverviewStyled>{overview}</OverviewStyled>

            <MobileButtons>
                <StyledButton onClick={handleAddMovie} props={addBtn} disabled={addBtn} type="button">add in library</StyledButton>
                <StyledButton onClick={handleDeleteMovie} props={deleteBtn} disabled={deleteBtn} type="button">delete from library</StyledButton>
            </MobileButtons>


            <TrailerModal />

            {imagesSel && imagesSel.length !== 0 ? <GallerysSwiper images={imagesSel} /> : <Plug>We haven`t images off this movies</Plug>}

            <MainButton route={`/search/${movieId}/cast`} content={'Cast'} state={{ from: location }} />
            <MainButton route={`/search/${movieId}/reviews`} content={'Reviews'} />

        </TitleWrapp >

        <PosterWrapper>
            <Img src={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : PosterError} alt={title} />

            {authInfoSel.isLoggedIn ?
                <ButtonsContainer>
                    <StyledButton onClick={handleAddMovie} props={addBtn} disabled={addBtn} type="button">add in library</StyledButton>
                    <StyledButton onClick={handleDeleteMovie} props={deleteBtn} disabled={deleteBtn} type="button">delete from library</StyledButton>
                </ButtonsContainer> : ''
            }

        </PosterWrapper>

    </>)
}
export default MainInfoMovie