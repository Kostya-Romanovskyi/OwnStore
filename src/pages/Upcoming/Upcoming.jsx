import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { setPath } from "../../Redux/Slices/PathSlice"
import { useEffect } from "react"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies";
import { getUpcomingMovies } from "../../APIs/GetMoviesLists";
import ScrollToTop from "../../components/ScrollToTop";
import { upcomingMoviesFull } from "../../Redux/Slices/UpcomingMoviesSlice";
import { MainContainer, UpcomingMovies } from "./Upcoming.styled";

const Upcoming = () => {
    const upcomingInfoSel = useSelector(upcomingMoviesFull);

    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

    return (
        <>
            <MainContainer>
                <ScrollToTop />

                <UpcomingMovies>Upcoming movies</UpcomingMovies>

                <FullLayoutMovies
                    categoryInfo={upcomingInfoSel}
                    fetchMovies={getUpcomingMovies}
                />
            </MainContainer>
        </>
    );
};
export default Upcoming;
