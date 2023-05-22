import { useEffect, useState } from "react"
import { getPopularMovies } from "../../APIs/GetMoviesLists"
import { popularMoviesFull } from "../../Redux/Slices/PopularMoviesSlice"
import { useDispatch, useSelector } from "react-redux"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MainContainer, GridList, Item, Poster, InfoWrapp } from "./FullPopularList.styled";

const FullPopularList = () => {
    const popularListSel = useSelector(popularMoviesFull)
    console.log(popularListSel)

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, page) => {
        console.log(page)
        setCurrentPage(page);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMovies(currentPage))
    }, [dispatch, currentPage])

    return (
        <main>
            <MainContainer>
                <GridList>
                    {popularListSel.results && popularListSel.results.map(({ id, poster_path, title, vote_average, release_date, vote_count
                    }) =>
                        <Item key={id}>
                            <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

                            <InfoWrapp>
                                <p>Rate: {vote_average}</p>
                                <p>{title}</p>
                                <p>{release_date}</p>
                                <p>Votes: {vote_count}</p>
                            </InfoWrapp>


                        </Item>)}

                </GridList>
                <button type="button">more</button>

                <Stack spacing={2}>
                    <Pagination onChange={handlePageChange} count={500} page={currentPage} variant="outlined" color="primary" />
                </Stack>
            </MainContainer>
        </main>
    )
}
export default FullPopularList