import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { setPath } from "../../Redux/Slices/PathSlice"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies";
import { getTrandingMovies } from "../../APIs/GetMoviesLists";
import ScrollToTop from "../../components/ScrollToTop";
import { trandingMoviesFull, trandingMoviesLoading } from "../../Redux/Slices/TrandingMoviesSlice";
import { MainContainer, TrendingMovies } from "./Trending.styled";
import { CircleLoader } from "react-spinners"

const Trending = () => {
    const trendingInfoSel = useSelector(trandingMoviesFull);
    const trendingLoading = useSelector(trandingMoviesLoading);

    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

    return (
        <>
            {!trendingLoading ? <MainContainer>
                <ScrollToTop />

                <TrendingMovies>Trending movies</TrendingMovies>

                <FullLayoutMovies
                    categoryInfo={trendingInfoSel}
                    fetchMovies={getTrandingMovies}
                />

            </MainContainer>
                :
                <CircleLoader
                    color="#8b36d6"
                    cssOverride={{ margin: '0 auto' }}
                    loading
                    size={70}
                />}

        </>
    );
};
export default Trending;