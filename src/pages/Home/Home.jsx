import SwiperMovieList from "../../components/SwiperMovieList/SwiperMovieList"
import UpcomingList from "../../components/UpcomingList/UpcomingList"
import TrendingList from "../../components/TrendingList/TrendingList"
import SectionSearch from "../../components/SectionSearch/SectionSearch"
import { getPopularMovies, getTopRatedMovies } from "../../APIs/GetMoviesLists"
import { topRatedMovies } from "../../Redux/Slices/TopRatedMoviesSlice"
import { popularMovies } from "../../Redux/Slices/PopularMoviesSlice"
import { MainContainer, MainTitle, DecorateTitle, DecorateSircle } from "./Home.styled"
import { useSelector } from "react-redux"

const Home = () => {
    const popularMoviesSel = useSelector(popularMovies)
    const TopRatedMovieSel = useSelector(topRatedMovies)


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
            </MainContainer>
        </main>
    )
}
export default Home