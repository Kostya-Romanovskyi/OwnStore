import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getTrendingMovies } from "../../APIs/GetMoviesLists"
import { trendingMovies } from "../../Redux/TrendingMoviesSlice/TrendingMoviesSlice"
import { PopularMovies, Poster, Container, FlexWrapp, TitleFilm, Statistic, Button } from "./TrendingList.styled"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const TrendingList = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }

    const trendingMoviesSel = useSelector(trendingMovies)
    console.log(trendingMoviesSel)

    const debounce = (func, delay) => {
        let timeoutId;

        return function (...args) {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getTrendingMovies());


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
            <PopularMovies>Popular now</PopularMovies>
            <Swiper spaceBetween={screenWidth > 1200 ? 20 : (screenWidth > 768 ? 40 : 50)}
                slidesPerView={screenWidth > 1200 ? 5 : (screenWidth > 768 ? 3 : 1)}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    speed: 100,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                {trendingMoviesSel && trendingMoviesSel.map(({ id, title, poster_path, vote_average, release_date, genre_ids
                }) => {
                    return (
                        <SwiperSlide key={id}>

                            <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                            <Container>
                                <FlexWrapp>
                                    <TitleFilm>{truncateString(title, 15)}</TitleFilm>
                                    <Statistic>{vote_average}</Statistic>
                                </FlexWrapp>
                                <FlexWrapp>
                                    <Statistic>{release_date}</Statistic>
                                    <Statistic>{genre_ids.map(genre => genre)}</Statistic>
                                </FlexWrapp>
                                <Button type="button">film page</Button>
                            </Container>
                        </SwiperSlide>)
                })}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span className="progressContent" ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}

export default TrendingList;