import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { pathBack } from "../../Redux/Slices/PathSlice"
import PosterError from '../../assets/ErrorPoster.jpg'
import { movieById } from "../../Redux/Slices/MovieById"
import MainButton from "../MainButton/MainButton"
import { getImagesById } from "../../APIs/GetById"
import { TitleWrapp, BackButton, Title, Status, ImgMobile, OverviewStyled, MobileButtons, Img, GenresList, GenresItem, GenresText, PosterWrapper } from "./MainInfoMovie.styled"
import { useEffect, useState } from "react"
import { imagesEl } from "../../Redux/Slices/ImagesSlice"
import TrailerModal from "../Modal/Modal"

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const MainInfoMovie = () => {
    const { movieId } = useParams()
    const { title, status, genres, poster_path, overview } = useSelector(movieById)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const dispatch = useDispatch()
    console.log(status)

    const location = useLocation()
    const backPath = useSelector(pathBack)
    const imageSel = useSelector(imagesEl)

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
        dispatch(getImagesById(movieId))

        const handleResize = debounce(() => {
            setScreenWidth(window.innerWidth);
        }, 300);


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch, genres, movieId])

    return (<>

        <TitleWrapp>
            <BackButton to={backPath?.pathname + backPath?.search ? backPath?.pathname + backPath?.search : '/'}>Go back</BackButton>
            <Title>{title}</Title>
            <Status props={status}>{status}</Status>

            <ImgMobile src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

            <GenresList>
                {genres && genres.map(({ id, name }) => {
                    return (<GenresItem key={id}>
                        <GenresText>{name}</GenresText>
                    </GenresItem>)
                })}

            </GenresList>

            <OverviewStyled>{overview}</OverviewStyled>

            <MobileButtons>
                <button type="button">add</button>
                <button type="button">delete</button>
            </MobileButtons>


            <TrailerModal />

            <div style={{ width: screenWidth < 1200 ? (screenWidth < 767 ? 320 : 385) : "100%", marginBottom: screenWidth > 1200 ? 60 : 0 }}>

                <Swiper style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    height: screenWidth < 1200 ? 175 : 290
                }}
                    loop={true}
                    spaceBetween={100}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {imageSel && imageSel.map(({ file_path, vote_count
                    }) => {
                        return (

                            <SwiperSlide key={file_path} style={{ height: '100%' }}>
                                <img src={`https://image.tmdb.org/t/p/w500${file_path}`} style={{ width: '78%', height: 'auto' }} alt={vote_count} />
                            </SwiperSlide>)
                    })}

                </Swiper>

                <Swiper
                    style={{ height: 56, marginBottom: 20 }}
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {imageSel && imageSel.map(({ file_path, vote_count
                    }) => {
                        return (

                            <SwiperSlide key={file_path}>
                                <img src={`https://image.tmdb.org/t/p/w500${file_path}`} style={{ width: '74%', height: 'auto' }} alt={vote_count} />
                            </SwiperSlide>)
                    })}
                </Swiper>
            </div>

            <MainButton route={`/search/${movieId}/cast`} content={'Cast'} state={{ from: location }} />
            <MainButton route={`/search/${movieId}/reviews`} content={'Reviews'} />

        </TitleWrapp >

        <PosterWrapper>
            <Img src={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : PosterError} alt={title} />
            <button type="button">add</button>
            <button type="button">delete</button>
        </PosterWrapper>

    </>)
}
export default MainInfoMovie