import { useSelector } from "react-redux"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies"
import { getTopRatedMovies } from "../../APIs/GetMoviesLists"
import ScrollToTop from "../../components/ScrollToTop"
import { topRatedMoviesFull } from "../../Redux/Slices/TopRatedMoviesSlice"
import { MainContainer, TopRatedMovies } from './TopRated.styled'

const TopRated = () => {
    const topRatedInfoSel = useSelector(topRatedMoviesFull)

    return (<>
        <MainContainer>

            <ScrollToTop />

            <TopRatedMovies>Top rated movies</TopRatedMovies>

            <FullLayoutMovies categoryInfo={topRatedInfoSel} fetchMovies={getTopRatedMovies} />

        </MainContainer>
    </>)
}
export default TopRated