import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getMovieById } from "../../APIs/GetById"
import { movieById } from "../../Redux/Slices/MovieById"
import MainButton from "../../components/MainButton/MainButton"
import ScrollToTop from "../../components/ScrollToTop"
import { MainContainer, ImgMobile, Img, TitleWrapp, Title, OverviewStyled, MoreInfoStyled, NumberStyled, TextStyled, ListStyled, ItemStyled, Info } from "./Movie.styled"

const Movie = () => {
    const dispatch = useDispatch()
    const { movieId } = useParams()
    const { title, status, genres, backdrop_path, poster_path, budget, vote_average, overview, vote_count, runtime } = useSelector(movieById)
    const test = useSelector(movieById)
    console.log(test)


    useEffect(() => {
        dispatch(getMovieById(movieId))
    }, [dispatch, movieId])

    return (
        <main>
            <ScrollToTop />
            <MainContainer>
                <div>
                    <TitleWrapp>
                        <Title>{title}</Title>
                        <ImgMobile src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                        <ul>
                            {genres && genres.map(({ id, name }) => {
                                return (<li key={id}>
                                    <p>{name}</p>
                                </li>)
                            })}

                        </ul>
                        <OverviewStyled>{overview}</OverviewStyled>
                        <MainButton route={`/search/${movieId}/cast`} content={'Cast'} />
                        <MainButton route={`/search/${movieId}/reviews`} content={'Reviews'} />
                    </TitleWrapp>

                    <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                </div>
                <div>
                    <MoreInfoStyled>More<Info>Info</Info></MoreInfoStyled>
                    <ListStyled>
                        <ItemStyled>
                            <NumberStyled>{vote_average}</NumberStyled>
                            <TextStyled>Rating</TextStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <NumberStyled>{budget}</NumberStyled>
                            <TextStyled>Budget</TextStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <NumberStyled>{vote_count}</NumberStyled>
                            <TextStyled>Vote count</TextStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <NumberStyled>{runtime}</NumberStyled>
                            <TextStyled>Runtime</TextStyled>
                        </ItemStyled>
                    </ListStyled>
                </div>
            </MainContainer>
        </main >
    )
}
export default Movie


// toFixed(2)