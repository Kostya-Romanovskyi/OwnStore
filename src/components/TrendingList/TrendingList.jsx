import { useEffect } from "react"
import { getTrandingMovies } from "../../APIs/GetMoviesLists"
import { useDispatch, useSelector } from "react-redux"
import { trandingMovies } from "../../Redux/Slices/TrandingMoviesSlice"
import LittleCard from "../LittleCard/LittleCard"
import { Section, List, Title, WatchAllLink } from "./TrendingList.styled"

const TrendingList = () => {
    const dispatch = useDispatch()
    const trendingListSel = useSelector(trandingMovies)

    const nineElements = trendingListSel && trendingListSel.slice(3, 12)

    useEffect(() => {
        dispatch(getTrandingMovies())
    }, [dispatch])

    return (<Section>
        <Title>Trending movies <WatchAllLink to={`/trending`}>watch all</WatchAllLink></Title>
        <List>
            {nineElements && nineElements.map(({ id, backdrop_path, title, release_date, vote_average, original_language

            }) => {
                return (
                    <LittleCard key={id} img={backdrop_path} title={title} date={release_date} vote={vote_average} id={id} language={original_language
                    } />
                )
            })}
        </List>
    </Section>)
}
export default TrendingList