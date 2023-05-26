import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { getMovieById, getVideosById } from "../../APIs/GetById"

import ScrollToTop from "../../components/ScrollToTop"
import MainInfoMovie from "../../components/MainInfoMovie/MainInfoMovie"
import MoreInfoMovie from "../../components/MoreInfoMovie/MoreInfoMovie"

import { MainContainer, FlexWrapp } from "./Movie.styled"

const Movie = ({ pathCast }) => {
    const dispatch = useDispatch()
    const { movieId } = useParams()

    const location = useLocation()
    console.log(location)


    useEffect(() => {
        pathCast(location)
        dispatch(getMovieById(movieId))
        dispatch(getVideosById(movieId))

    }, [pathCast, dispatch, location, movieId])

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

Movie.propTypes = {
    pathCast: PropTypes.func.isRequired
};