import { useEffect, useState } from "react"
import { getMoviesSearch } from "../../APIs/GetMoviesSearch"
import { MainContainer, TitleStyled, StyledForm, CustomInput, SearchButton, StyledStack } from "./Search.styled"
import { useDispatch, useSelector } from "react-redux"
import Pagination from '@mui/material/Pagination';
import { searchMoviesFull } from "../../Redux/Slices/SearchMoviesSlice";
import { useSearchParams } from "react-router-dom";
import SearchList from "../../components/SearchList/SearchList";
import { TfiSearch } from 'react-icons/tfi'
import { useLocation } from "react-router-dom"
import { setPath } from "../../Redux/Slices/PathSlice"
import ScrollToTop from "../../components/ScrollToTop";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import { getGenres } from "../../APIs/GetMoviesLists";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? "";

    const [currentPage, setCurrentPage] = useState(1)

    const location = useLocation()


    const searchMovieSel = useSelector(searchMoviesFull)

    const dispatch = useDispatch()


    const handleInputChange = (e) => {

        if (e.target.value === "") {
            return setSearchParams({})
        }

        setSearchParams({ query: e.target.value.toLowerCase() });
    }

    const handlePageChange = (e, page) => {
        setCurrentPage(page);

        window.scrollTo(0, 0);
    };

    const handleResponse = (e) => {
        e.preventDefault()

        if (query === '') {
            return
        }

        dispatch(getMoviesSearch({ currentPage, query }))
    }

    useEffect(() => {
        dispatch(getMoviesSearch({ currentPage, query }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, dispatch])

    useEffect(() => {
        dispatch(setPath(location))
        dispatch(getGenres())

    }, [dispatch, location])

    return (<main>
        <MainContainer className="app">

            <ScrollToTop />

            <TitleStyled>Find your favorite movie</TitleStyled>

            <StyledForm autoComplete="off">
                <CustomInput onChange={handleInputChange} value={query} id="outlined-basic" label="Search" variant="outlined" />
                <SearchButton onClick={handleResponse}>
                    <TfiSearch style={{ fill: '#2f3363', width: 40, height: 40 }} />
                </SearchButton>
            </StyledForm>

            {searchMovieSel.results && <SearchList list={searchMovieSel.results} />}

            {searchMovieSel.results && searchMovieSel.results.length !== 0 ?
                <StyledStack spacing={2} style={{ marginBottom: 20, alignItems: 'center', justifyContent: "center" }}>
                    <Pagination onChange={handlePageChange} page={+currentPage} count={searchMovieSel.total_pages} variant="outlined" color="primary" />
                </StyledStack> :
                ''}
            <ScrollTopBtn />
        </MainContainer>
    </main>)
}
export default Search