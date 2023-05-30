import PropTypes from 'prop-types';
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useEffect, useState } from "react";

const GallerysSwiper = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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


        const handleResize = debounce(() => {
            setScreenWidth(window.innerWidth);
        }, 300);


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
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
                {images && images.map(({ file_path, vote_count
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
                {images && images.map(({ file_path, vote_count
                }) => {
                    return (

                        <SwiperSlide key={file_path}>
                            <img src={`https://image.tmdb.org/t/p/w500${file_path}`} style={{ width: '74%', height: 'auto' }} alt={vote_count} />
                        </SwiperSlide>)
                })}
            </Swiper>
        </div>
    )
}
export default GallerysSwiper

GallerysSwiper.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({}),),
};