import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingMovies } from "../../APIs/GetMoviesLists"
import { upcomingMovies, upcomingMoviesLoading } from "../../Redux/Slices/UpcomingMoviesSlice"
import './Upp.css'
import { CircleLoader } from "react-spinners"
import { Section, UpcomingMovies, WatchAllLink, Item, StyleLink, ListWrapper, Poster, InfoWrapp, TitleWrapp, Title, Overview, StatWrapp, Date, Vote, LikeButton, FlexWrapp } from "./UpcomingList.styled"


const UpcomingList = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const dispatch = useDispatch()
    const upcomingMoviesSel = useSelector(upcomingMovies)
    const upcomingLoading = useSelector(upcomingMoviesLoading)

    const threeEl = upcomingMoviesSel && upcomingMoviesSel.slice(7, 10)

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
        <> {!upcomingLoading ? <Section>
            <UpcomingMovies>Upcoming movies <WatchAllLink to={'/upcoming'}>watch all</WatchAllLink> </UpcomingMovies>
            <ListWrapper>
                {threeEl && threeEl.map(({ id, title, release_date, vote_average, backdrop_path, poster_path, overview, original_language }, index) => {
                    return (
                        <Item className={`card${index % 3}`} key={id}>
                            <StyleLink to={`/search/${id}`}>
                                <FlexWrapp>
                                    {index === 0 && screenWidth > 768 ? (<Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />) :
                                        (<Poster src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />)}

                                    <InfoWrapp>
                                        {index === 0 && screenWidth > 768 ?
                                            (<TitleWrapp style={{
                                                paddingTop: 7,
                                                marginBottom: 12
                                            }}>
                                                {index === 0 && screenWidth > 1200 ?
                                                    <Title style={{ marginBottom: 23 }}>{truncateString(title, 14)}</Title> :
                                                    <Title>{truncateString(title, 14)}</Title>}

                                                {index === 0 && screenWidth > 1200 ?
                                                    <LikeButton style={{ marginBottom: 23 }}>{original_language}</LikeButton> :
                                                    <LikeButton>{original_language}</LikeButton>}

                                            </TitleWrapp>)
                                            :
                                            (<TitleWrapp>
                                                <Title>{truncateString(title, 14)}</Title>
                                                <LikeButton>{original_language}</LikeButton>
                                            </TitleWrapp>)}

                                        {index === 0 && screenWidth > 768 ? <Overview>{screenWidth > 768 ? truncateString(overview, 140) : ''}</Overview> : ''}

                                        <StatWrapp>
                                            <Date>{release_date}</Date>
                                            <Vote>Rating:  {vote_average.toFixed(2)}</Vote>
                                        </StatWrapp>
                                    </InfoWrapp>
                                </FlexWrapp>
                            </StyleLink>
                        </Item>
                    );
                }
                )}
            </ListWrapper>

        </Section>
            :
            <CircleLoader
                color="#8b36d6"
                cssOverride={{ margin: '0 auto' }}
                loading
                size={70}
            />}

        </>
    )
}

export default UpcomingList;

