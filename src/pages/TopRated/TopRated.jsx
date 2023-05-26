import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { setPath } from "../../Redux/Slices/PathSlice"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies"
import { getTopRatedMovies } from "../../APIs/GetMoviesLists"
import ScrollToTop from "../../components/ScrollToTop"
import { topRatedMoviesFull } from "../../Redux/Slices/TopRatedMoviesSlice"
import { MainContainer, TopRatedMovies } from './TopRated.styled'

const TopRated = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

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