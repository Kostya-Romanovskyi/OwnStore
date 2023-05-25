import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import PosterError from '../../assets/ErrorPoster.jpg'
import { movieById } from "../../Redux/Slices/MovieById"
import MainButton from "../MainButton/MainButton"
import { TitleWrapp, Title, ImgMobile, OverviewStyled, Img, GenresList, GenresItem, GenresText } from "./MainInfoMovie.styled"

const MainInfoMovie = () => {
    const { movieId } = useParams()
    const { title, status, genres, backdrop_path, poster_path, overview } = useSelector(movieById)
    const test = useSelector(movieById)
    console.log(title)
    console.log(test)

    return (<>
        <TitleWrapp>
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
            <MainButton route={`/search/${movieId}/cast`} content={'Cast'} />
            <MainButton route={`/search/${movieId}/reviews`} content={'Reviews'} />
        </TitleWrapp>

        <Img src={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : PosterError} alt={title} />
    </>)
}
export default MainInfoMovie
