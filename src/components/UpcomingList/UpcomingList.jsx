import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingMovies } from "../../APIs/GetMoviesLists"
import { upcomingMovies } from "../../Redux/Slices/UpcomingMoviesSlice"
// import { Grid, Cell } from 'react-grid-system';
import { UpcomingMovies, WatchAll, ListWrapper, Item1, Item2, Item3, SpecialTitleWrapp, Poster, InfoWrapp, TitleWrapp, Title, Overview, StatWrapp, Date, Vote, LikeButton } from "./UpcomingList.styled"


const UpcomingList = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const dispatch = useDispatch()
    const upcomingMoviesSel = useSelector(upcomingMovies)

    const threeEl = upcomingMoviesSel && upcomingMoviesSel.slice(3, 10)
    console.log(threeEl)

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    const debounce = (func, delay) => {
        let timeoutId;

        return function (...args) {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    useEffect(() => {
        dispatch(getUpcomingMovies());

        const handleResize = debounce(() => {
            setScreenWidth(window.innerWidth);
        }, 300);


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);


    return (
        <>
            <UpcomingMovies>Upcoming movies <WatchAll>watch all</WatchAll> </UpcomingMovies>
            <ListWrapper>
                {/* {threeEl && threeEl.map(({ id, title, release_date, vote_average, backdrop_path
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

                        </Item>
                    )
                }
                )} */}

                {threeEl && <Item1>
                    <Poster src={`https://image.tmdb.org/t/p/w500${screenWidth > 768 ? threeEl[0].poster_path : threeEl[0].backdrop_path}`} alt={threeEl[0].title} />

                    <InfoWrapp>
                        <SpecialTitleWrapp>
                            <Title>{threeEl[0].title}</Title>
                            <LikeButton>like</LikeButton>
                        </SpecialTitleWrapp>
                        <Overview>{screenWidth > 768 ? truncateString(threeEl[0].overview, 140) : ''}</Overview>
                        <StatWrapp>
                            <Date>{threeEl[0].release_date}</Date>
                            <Vote>{threeEl[0].vote_average}</Vote>
                        </StatWrapp>
                    </InfoWrapp>
                </Item1>}
                {threeEl && <Item2 >
                    <Poster src={`https://image.tmdb.org/t/p/w500${threeEl[1].backdrop_path}`} alt={threeEl[1].title} />

                    <InfoWrapp>
                        <TitleWrapp>
                            <Title>{truncateString(threeEl[1].title, 14)}</Title>
                            <LikeButton>like</LikeButton>
                        </TitleWrapp>
                        <StatWrapp>
                            <Date>{threeEl[1].release_date}</Date>
                            <Vote>{threeEl[1].vote_average}</Vote>
                        </StatWrapp>
                    </InfoWrapp>
                </Item2>}
                {threeEl && <Item3 >
                    <Poster src={`https://image.tmdb.org/t/p/w500${threeEl[2].backdrop_path}`} alt={threeEl[2].title} />

                    <InfoWrapp>
                        <TitleWrapp>
                            <Title>{truncateString(threeEl[2].title, 14)}</Title>
                            <LikeButton>like</LikeButton>
                        </TitleWrapp>
                        <StatWrapp>
                            <Date>{threeEl[2].release_date}</Date>
                            <Vote>{threeEl[2].vote_average}</Vote>
                        </StatWrapp>
                    </InfoWrapp>
                </Item3>}
            </ListWrapper>
        </>
    )
}

export default UpcomingList;