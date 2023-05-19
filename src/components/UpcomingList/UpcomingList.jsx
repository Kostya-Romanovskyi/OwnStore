import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingMovies } from "../../APIs/GetMoviesLists"
import { upcomingMovies } from "../../Redux/Slices/UpcomingMoviesSlice"
import { UpcomingMovies, ListWrapper, Item, Poster, InfoWrapp, TitleWrapp, Title, StatWrapp, Date, Vote, LikeButton } from "./UpcomingList.styled"


const UpcomingList = () => {
    const dispatch = useDispatch()
    const upcomingMoviesSel = useSelector(upcomingMovies)

    const threeEl = upcomingMoviesSel && upcomingMoviesSel.slice(5, 8)
    console.log(threeEl)

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, [dispatch]);


    return (
        <>
            <UpcomingMovies>Upcoming movies watch all</UpcomingMovies>
            <ListWrapper>
                {threeEl && threeEl.map(({ id, title, release_date, vote_average, backdrop_path
                }) => {
                    return (
                        <Item key={id}>
                            <Poster src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />

                            <InfoWrapp>
                                <TitleWrapp>
                                    <Title>{truncateString(title, 14)}</Title>
                                    <LikeButton>like</LikeButton>
                                </TitleWrapp>
                                <StatWrapp>
                                    <Date>{release_date}</Date>
                                    <Vote>{vote_average}</Vote>
                                </StatWrapp>
                            </InfoWrapp>
                        </Item>)
                })}
            </ListWrapper>
        </>
    )
}

export default UpcomingList;