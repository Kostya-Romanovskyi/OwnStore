import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getNowPlaying } from "../../APIs/GetMoviesLists"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies"
import { nowPlayingFull } from "../../Redux/Slices/NowPlaingSlice"
import { MainContainer, NowPlayingMovies } from "./NowPlaying.styled"
import { setPath } from "../../Redux/Slices/PathSlice"
import ScrollToTop from "../../components/ScrollToTop"
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn"


const NowPlaying = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const nowPlayingInfotSel = useSelector(nowPlayingFull)

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

    return (<>
        <MainContainer>
            <ScrollToTop />
            <NowPlayingMovies>Now Playing movies</NowPlayingMovies>
            <FullLayoutMovies categoryInfo={nowPlayingInfotSel} fetchMovies={getNowPlaying} />

            <ScrollTopBtn />
        </MainContainer>
    </>)
}

export default NowPlaying