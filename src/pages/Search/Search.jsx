import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams, useLocation } from "react-router-dom";
import { TfiSearch } from 'react-icons/tfi'
import Pagination from '@mui/material/Pagination';
import { getMoviesSearch } from "../../APIs/GetMoviesSearch"
import { getGenres } from "../../APIs/GetMoviesLists";
import { searchMoviesFull } from "../../Redux/Slices/SearchMoviesSlice";
import SearchList from "../../components/SearchList/SearchList";
import { setPath } from "../../Redux/Slices/PathSlice"
import ScrollToTop from "../../components/ScrollToTop";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import { MainContainer, TitleStyled, StyledForm, CustomInput, SearchButton, StyledStack } from "./Search.styled"

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? "";
    const pageUrl = searchParams.get('page') ?? 1;

    const location = useLocation()

    const searchMovieSel = useSelector(searchMoviesFull)

    const dispatch = useDispatch()

    const handleInputChange = (e) => {

        if (e.target.value === "") {
            return setSearchParams({})
        }

        setSearchParams({ query: e.target.value.toLowerCase() });
    }

    const handlePageChange = (e) => {
        window.scrollTo(0, 0);

        setSearchParams({ query: query, page: +e.target.textContent });

        const data = { page: +e.target.textContent, query: query }
        dispatch(getMoviesSearch(data))
    };

    const handleResponse = (e) => {
        e.preventDefault()

        if (query === '') {
            return
        }

        setSearchParams({ query: query, page: +pageUrl });

        const data = { page: +pageUrl, query: query }
        dispatch(getMoviesSearch(data))

    }

    useEffect(() => {
        const data = { page: +pageUrl, query: query }
        dispatch(getMoviesSearch(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

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
                    <Pagination onChange={handlePageChange} page={+pageUrl} count={searchMovieSel.total_pages} variant="outlined" color="primary" />
                </StyledStack> :
                ''}
            <ScrollTopBtn />
        </MainContainer>
    </main>)
}
export default Search