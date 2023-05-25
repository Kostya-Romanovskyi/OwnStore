import { useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import PosterError from '../../assets/ErrorPoster.jpg'
import { movieById } from "../../Redux/Slices/MovieById"
import MainButton from "../MainButton/MainButton"
import { TitleWrapp, BackButton, Title, ImgMobile, OverviewStyled, Img, GenresList, GenresItem, GenresText } from "./MainInfoMovie.styled"

const MainInfoMovie = () => {
    const { movieId } = useParams()
    const { title, status, genres, backdrop_path, poster_path, overview } = useSelector(movieById)
    // const test = useSelector(movieById)
    const location = useLocation()
    console.log(location)

    return (<>

        <TitleWrapp>
            <BackButton to={location.state?.from ?? '/'}>Go back</BackButton>
            <Title>{title}</Title>
            <ImgMobile src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <GenresList>
                {genres && genres.map(({ id, name }) => {
                    return (<GenresItem key={id}>
                        <GenresText>{name}</GenresText>
                    </GenresItem>)
                })}

            </GenresList>
            <OverviewStyled>{overview}</OverviewStyled>
            <MainButton route={`/search/${movieId}/cast`} content={'Cast'} state={{ from: location }} />
            <MainButton route={`/search/${movieId}/reviews`} content={'Reviews'} />
        </TitleWrapp>

        <Img src={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : PosterError} alt={title} />
    </>)
}
export default MainInfoMovie
