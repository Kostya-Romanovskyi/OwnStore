import { useSelector, useDispatch } from "react-redux"
import { getPopularMovies } from "../../APIs/GetMoviesLists"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies"
import { popularMoviesFull } from "../../Redux/Slices/PopularMoviesSlice"
import { useLocation } from "react-router-dom"
import { MainContainer, PopularMovies } from "./Popular.styled"
import { useEffect } from "react"
import { setPath } from "../../Redux/Slices/PathSlice"


const Popular = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const popularInfotSel = useSelector(popularMoviesFull)
    console.log(location)

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

    return (<>
        <MainContainer>
            <PopularMovies>Popular movies</PopularMovies>
            <FullLayoutMovies state={location} categoryInfo={popularInfotSel} fetchMovies={getPopularMovies} />
        </MainContainer>

    </>)
}

export default Popular