import { useSelector } from "react-redux";
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies";
import { getTrandingMovies } from "../../APIs/GetMoviesLists";
import ScrollToTop from "../../components/ScrollToTop";
import { trandingMoviesFull } from "../../Redux/Slices/TrandingMoviesSlice";
import { MainContainer, TrendingMovies } from "./Trending.styled";

const Trending = () => {
    const trendingInfoSel = useSelector(trandingMoviesFull);

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