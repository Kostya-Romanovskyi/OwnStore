import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getMovieById } from "../../APIs/GetById"
import ScrollToTop from "../../components/ScrollToTop"
import MainInfoMovie from "../../components/MainInfoMovie/MainInfoMovie"
import MoreInfoMovie from "../../components/MoreInfoMovie/MoreInfoMovie"

import { MainContainer, FlexWrapp } from "./Movie.styled"

const Movie = () => {
    const dispatch = useDispatch()
    const { movieId } = useParams()


    useEffect(() => {
        dispatch(getMovieById(movieId))
    }, [dispatch, movieId])

    return (
        <main>
            <ScrollToTop />
            <MainContainer>
                <FlexWrapp>
                    <MainInfoMovie />
                </FlexWrapp>
                <div>
                    <MoreInfoMovie />
                </div>
            </MainContainer>
        </main >
    )
}
export default Movie;