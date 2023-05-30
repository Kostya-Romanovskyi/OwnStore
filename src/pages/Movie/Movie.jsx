import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { getMovieById, getVideosById, getImagesById } from "../../APIs/GetById"
import { movieByIdLoading } from '../../Redux/Slices/MovieById';
import { CircleLoader } from "react-spinners"
import { fetchMovies } from '../../APIs/LibraryAPI';
import { getGenres } from '../../APIs/GetMoviesLists';
import { getMovieByGenre } from '../../APIs/GetMoviesLists';

import ScrollToTop from "../../components/ScrollToTop"
import MainInfoMovie from "../../components/MainInfoMovie/MainInfoMovie"
import MoreInfoMovie from "../../components/MoreInfoMovie/MoreInfoMovie"
import GenresSwiper from '../../components/GenresSwiper/GenresSwiper';

import { MainContainer, FlexWrapp } from "./Movie.styled"

const Movie = ({ pathCast }) => {
    const dispatch = useDispatch()
    const { movieId } = useParams()

    const movieByIdSel = useSelector(movieByIdLoading)

    const location = useLocation()

    useEffect(() => {
        pathCast(location)
        dispatch(getMovieById(movieId))
        dispatch(getVideosById(movieId))
        dispatch(getImagesById(movieId))
        dispatch(fetchMovies())
        dispatch(getGenres())
        getMovieByGenre(movieId)

    }, [pathCast, dispatch, location, movieId])

    return (
        <main >

            <ScrollToTop />
            <MainContainer className='app'>
                {!movieByIdSel ?
                    <>
                        <FlexWrapp>
                            <MainInfoMovie />
                        </FlexWrapp>

                        <section>
                            <MoreInfoMovie />
                        </section>

                        <GenresSwiper />

                    </>
                    :
                    <CircleLoader
                        color="#8b36d6"
                        cssOverride={{ margin: '0 auto' }}
                        loading
                        size={70}
                    />}
            </MainContainer>
        </main >
    )
}
export default Movie;

Movie.propTypes = {
    pathCast: PropTypes.func.isRequired
};