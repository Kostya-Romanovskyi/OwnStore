import SwiperMovieList from "../../components/SwiperMovieList/SwiperMovieList"
import UpcomingList from "../../components/UpcomingList/UpcomingList"
import TrendingList from "../../components/TrendingList/TrendingList"
import SectionSearch from "../../components/SectionSearch/SectionSearch"
import { getPopularMovies, getTopRatedMovies, getNowPlaying } from "../../APIs/GetMoviesLists"
import { getGenres } from "../../APIs/GetMoviesLists"
import { topRatedMovies } from "../../Redux/Slices/TopRatedMoviesSlice"
import { popularMovies } from "../../Redux/Slices/PopularMoviesSlice"
import { MainContainer, MainTitle, DecorateTitle, DecorateSircle } from "./Home.styled"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { setPath } from "../../Redux/Slices/PathSlice"
import { nowPlaying } from "../../Redux/Slices/NowPlaingSlice"

const Home = () => {
    const popularMoviesSel = useSelector(popularMovies)
    const TopRatedMovieSel = useSelector(topRatedMovies)
    const nowPlayingMovieSel = useSelector(nowPlaying)


    const location = useLocation()


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())

        dispatch(setPath(location))
    }, [dispatch, location])

    return (
        <main>
            <MainContainer>
                <MainTitle>Movies for <DecorateTitle>all</DecorateTitle></MainTitle>
                <DecorateSircle></DecorateSircle>
                <SwiperMovieList title='Popular now ' link={`/popular`} moviesArray={getPopularMovies} selector={popularMoviesSel} />
                <UpcomingList />
                <SwiperMovieList title='Top Rated ' link={`/toprated`} moviesArray={getTopRatedMovies} selector={TopRatedMovieSel} />
                <TrendingList />
                <SectionSearch />
                <SwiperMovieList title='Now Playing ' link={`/nowplaying`} moviesArray={getNowPlaying} selector={nowPlayingMovieSel} />
            </MainContainer>
        </main>
    )
}
export default Home