import { useEffect, useState } from "react"
import { getPopularMovies } from "../../APIs/GetMoviesLists"
import { popularMoviesFull } from "../../Redux/Slices/PopularMoviesSlice"
import { useDispatch, useSelector } from "react-redux"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MainCard from "../MainCard/MainCard";
import { MainContainer, GridList, Item } from "./FullPopularList.styled";

const FullPopularList = () => {
    const popularListSel = useSelector(popularMoviesFull)
    console.log(popularListSel.results)

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, page) => {
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
                    {popularListSel.results && popularListSel.results.map(({ id, poster_path, title, vote_average, release_date, genre_ids
                    }) =>
                        <Item key={id}>

                            <MainCard id={id}
                                title={title}
                                poster={poster_path}
                                vote={vote_average}
                                date={release_date}
                                genre={genre_ids} />

                        </Item>)}

                </GridList>

                <Stack spacing={2} >
                    <Pagination onChange={handlePageChange} count={500} page={currentPage} variant="outlined" color="secondary" style={{ justifyContent: 'center' }} />
                </Stack>
            </MainContainer>
        </main>
    )
}
export default FullPopularList