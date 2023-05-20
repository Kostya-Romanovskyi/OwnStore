import { useEffect } from "react"
import { getTrandingMovies } from "../../APIs/GetMoviesLists"
import { useDispatch, useSelector } from "react-redux"
import { trandingMovies } from "../../Redux/Slices/TrandingMoviesSlice"
import LittleCard from "../LittleCard/LittleCard"
import { List, Title, WatchAll } from "./TrendingList.styled"

const TrendingList = () => {
    const dispatch = useDispatch()
    const trendingListSel = useSelector(trandingMovies)

    const nineElements = trendingListSel && trendingListSel.slice(3, 12)

    useEffect(() => {
        dispatch(getTrandingMovies())
    }, [dispatch])

    return (<>
        <Title>Trending movies <WatchAll>watch all</WatchAll></Title>
        <List>
            {nineElements && nineElements.map(({ id, backdrop_path, title, release_date, vote_average
            }) => {
                return (
                    <LittleCard key={id} img={backdrop_path} title={title} date={release_date} vote={vote_average} />
                )
            })}
        </List>
    </>)
}
export default TrendingList