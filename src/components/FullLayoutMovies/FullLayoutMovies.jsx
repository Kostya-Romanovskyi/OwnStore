import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import AllMoviesList from "../AllMoviesList/AllMoviesList";
import { MainContainer, StyledStack } from "./FullLayoutMovies.styled";

const FullLayoutMovies = ({ categoryInfo, fetchMovies }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageUrl = searchParams.get('page') ?? 1;

    const dispatch = useDispatch()

    const handlePageChange = (e) => {
        window.scrollTo(0, 0);

        setSearchParams({ page: +e.target.textContent });
    };

    useEffect(() => {
        setSearchParams({ page: +pageUrl })

        dispatch(fetchMovies(+pageUrl))

    }, [dispatch, fetchMovies, pageUrl, setSearchParams])

    return (
        <main>
            <MainContainer>

                <AllMoviesList categoryInfo={categoryInfo} />

                <StyledStack spacing={2} style={{ marginBottom: 20, alignItems: 'center', justifyContent: "center" }}>
                    <Pagination onChange={handlePageChange} count={categoryInfo.total_pages && categoryInfo.total_pages > 200 ?
                        300 :
                        categoryInfo.total_pages} page={+pageUrl} variant="outlined" color="primary" />
                </StyledStack>

            </MainContainer>
        </main>
    )
}
export default FullLayoutMovies

FullLayoutMovies.propTypes = {
    categoryInfo: PropTypes.shape().isRequired,
    fetchMovies: PropTypes.func.isRequired,
};