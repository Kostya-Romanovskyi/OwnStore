import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import { videosTrailer } from '../../Redux/Slices/VideosSlice';



const YouTubeTrailer = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const trailerSel = useSelector(videosTrailer)

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

    return (<>
        <ReactPlayer url={trailerSel.video}
            controls
            width={screenWidth < 1200 ? (screenWidth < 767 ? "90%" : "90%") : "50%"}
            height={screenWidth < 1200 ? (screenWidth < 767 ? "200px" : "400px") : "450px"}

        />
    </>)

}

export default YouTubeTrailer