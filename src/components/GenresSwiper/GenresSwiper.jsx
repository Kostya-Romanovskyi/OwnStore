import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { getMovieByGenre } from '../../APIs/GetMoviesLists';
import { moviesByGenres } from '../../Redux/Slices/MoviesByGenreSlice';
import MainCard from '../MainCard/MainCard';
import ScrollToTop from '../ScrollToTop';
import { useParams } from 'react-router-dom';

const GenresSwiper = () => {
    const moviesByGenresSel = useSelector(moviesByGenres)
    const { movieId } = useParams()



    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
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

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getMovieByGenre(movieId))

        const handleResize = debounce(() => {
            setScreenWidth(window.innerWidth);
        }, 300);


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [dispatch, movieId]);


    return (<>

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
            {moviesByGenresSel && moviesByGenresSel.map(({ id, title, poster_path, vote_average, release_date, genre_ids
            }) => {
                return (

                    <SwiperSlide key={id}>
                        <ScrollToTop />
                        <MainCard id={id}
                            title={title}
                            poster={poster_path}
                            vote={vote_average}
                            date={release_date}
                            genre={genre_ids} />
                    </SwiperSlide>)
            })}

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span className="progressContent" ref={progressContent}></span>
            </div>
        </Swiper>
    </>)
}
export default GenresSwiper