import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getTopRatedMovies } from "../../APIs/GetMoviesLists"
import { topRatedMoviesFull } from "../../Redux/Slices/TopRatedMoviesSlice";
import MainCard from "../MainCard/MainCard";
import { MainContainer, GridList, Item } from "./FullTopRatedList.styled";

const FullTopRatedList = () => {
    const topRatedListSel = useSelector(topRatedMoviesFull)
    console.log(topRatedListSel.results)

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);

        window.scrollTo(0, 0);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopRatedMovies(currentPage))
    }, [dispatch, currentPage])

    return (
        <main>
            <MainContainer>
                <GridList>
                    {topRatedListSel.results && topRatedListSel.results.map(({ id, poster_path, title, vote_average, release_date, genre_ids
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
                    <Pagination onChange={handlePageChange} count={500} page={currentPage} variant="outlined" color="secondary" />
                </Stack>
            </MainContainer>
        </main>
    )
}
export default FullTopRatedList