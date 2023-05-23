import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import AllMoviesList from "../AllMoviesList/AllMoviesList";
import { MainContainer } from "./FullLayoutMovies.styled";

const FullLayoutMovies = ({ categoryInfo, fetchMovies }) => {
    const [currentPage, setCurrentPage] = useState(1);

    console.log(categoryInfo)
    const handlePageChange = (event, page) => {
        setCurrentPage(page);

        window.scrollTo(0, 0);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies(currentPage))
    }, [dispatch, currentPage, fetchMovies])

    return (
        <main>
            <MainContainer>

                <AllMoviesList categoryInfo={categoryInfo} />

                <Stack spacing={2} >
                    <Pagination onChange={handlePageChange} count={categoryInfo.total_pages && categoryInfo.total_pages > 200 ?
                        300 :
                        categoryInfo.total_pages} page={currentPage} variant="outlined" color="secondary" />
                </Stack>

            </MainContainer>
        </main>
    )
}
export default FullLayoutMovies

FullLayoutMovies.propTypes = {
    categoryInfo: PropTypes.shape().isRequired,
    fetchMovies: PropTypes.func.isRequired,
};