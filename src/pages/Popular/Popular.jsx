import { useSelector } from "react-redux"
import { getPopularMovies } from "../../APIs/GetMoviesLists"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies"
import { popularMoviesFull } from "../../Redux/Slices/PopularMoviesSlice"
import { MainContainer, PopularMovies } from "./Popular.styled"


const Popular = () => {

    const popularInfotSel = useSelector(popularMoviesFull)

    return (<>
        <MainContainer>
            <PopularMovies>Popular movies</PopularMovies>
            <FullLayoutMovies categoryInfo={popularInfotSel} fetchMovies={getPopularMovies} />
        </MainContainer>

    </>)
}

export default Popular