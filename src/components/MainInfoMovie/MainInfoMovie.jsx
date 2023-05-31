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
import { libraryEl } from "../../Redux/Slices/LibrarySlice"
import { addMovie, deleteMovie } from "../../APIs/LibraryAPI"
import GallerysSwiper from "../GallerysSwiper/GellarysSwiper"


const MainInfoMovie = () => {
    const [addBtn, setAddBtn] = useState(false)
    const [deleteBtn, setDeleteBtn] = useState(true)

    const { movieId } = useParams()
    const { title, status, genres, poster_path, overview, vote_average, release_date } = useSelector(movieById)
    const test = useSelector(movieById)
    console.log(test)

    const dispatch = useDispatch()

    const librarySel = useSelector(libraryEl)

    const location = useLocation()
    const backPath = useSelector(pathBack)
    const imagesSel = useSelector(imagesEl)

    useEffect(() => {
        librarySel.library && librarySel.library.map((movie) => {
            if (movieId === movie.movieId) {
                setAddBtn(movie.inLibrary)
                setDeleteBtn(false)
            }
        })
    }, [librarySel.library, movieId])


    const handleAddMovie = () => {
        dispatch(addMovie({ title, status, genres, poster_path, overview, movieId, vote_average, release_date, inLibrary: true }))
        setDeleteBtn(false)
    }

    const handleDeleteMovie = () => {
        librarySel.library && librarySel.library.map((movie) => {
            if (movieId === movie.movieId) {
                dispatch(deleteMovie(movie.id))

                setAddBtn(false)
                setDeleteBtn(true)
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
            <ButtonsContainer>
                <StyledButton onClick={handleAddMovie} props={addBtn} disabled={addBtn} type="button">add in library</StyledButton>
                <StyledButton onClick={handleDeleteMovie} props={deleteBtn} disabled={deleteBtn} type="button">delete from library</StyledButton>
            </ButtonsContainer>
        </PosterWrapper>

    </>)
}
export default MainInfoMovie