import { useSelector } from "react-redux";
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies";
import { getUpcomingMovies } from "../../APIs/GetMoviesLists";
import ScrollToTop from "../../components/ScrollToTop";
import { upcomingMoviesFull } from "../../Redux/Slices/UpcomingMoviesSlice";
import { MainContainer, UpcomingMovies } from "./Upcoming.styled";

const Upcoming = () => {
    const upcomingInfoSel = useSelector(upcomingMoviesFull);

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
