import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getPopularMovies } from "../../APIs/GetMoviesLists"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies"
import { popularMoviesFull } from "../../Redux/Slices/PopularMoviesSlice"
import { MainContainer, PopularMovies } from "./Popular.styled"
import { setPath } from "../../Redux/Slices/PathSlice"
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn"


const Popular = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const popularInfotSel = useSelector(popularMoviesFull)

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

    return (<>
        <MainContainer>
            <PopularMovies>Popular movies</PopularMovies>
            <FullLayoutMovies categoryInfo={popularInfotSel} fetchMovies={getPopularMovies} />

            <ScrollTopBtn />
        </MainContainer>

    </>)
}

export default Popular