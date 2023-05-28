import { useSelector, useDispatch } from "react-redux"
import { getNowPlaying } from "../../APIs/GetMoviesLists"
import FullLayoutMovies from "../../components/FullLayoutMovies/FullLayoutMovies"
import { nowPlayingFull } from "../../Redux/Slices/NowPlaingSlice"
import { useLocation } from "react-router-dom"
import { MainContainer, NowPlayingMovies } from "./NowPlaying.styled"
import { useEffect } from "react"
import { setPath } from "../../Redux/Slices/PathSlice"
import ScrollToTop from "../../components/ScrollToTop"


const NowPlaying = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const nowPlayingInfotSel = useSelector(nowPlayingFull)
    console.log(location)
    console.log(nowPlayingInfotSel)

    useEffect(() => {
        dispatch(setPath(location))
    }, [dispatch, location])

    return (<>
        <MainContainer>
            <ScrollToTop />
            <NowPlayingMovies>Now Playing movies</NowPlayingMovies>
            <FullLayoutMovies state={location} categoryInfo={nowPlayingInfotSel} fetchMovies={getNowPlaying} />
        </MainContainer>
    </>)
}

export default NowPlaying