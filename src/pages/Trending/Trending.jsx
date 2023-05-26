import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { setPath } from "../../Redux/Slices/PathSlice"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies";
import { getTrandingMovies } from "../../APIs/GetMoviesLists";
import ScrollToTop from "../../components/ScrollToTop";
import { trandingMoviesFull } from "../../Redux/Slices/TrandingMoviesSlice";
import { MainContainer, TrendingMovies } from "./Trending.styled";

const Trending = () => {
    const trendingInfoSel = useSelector(trandingMoviesFull);

    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

    return (
        <>
            <MainContainer>
                <ScrollToTop />

                <TrendingMovies>Trending movies</TrendingMovies>

                <FullLayoutMovies
                    categoryInfo={trendingInfoSel}
                    fetchMovies={getTrandingMovies}
                />

            </MainContainer>
        </>
    );
};
export default Trending;