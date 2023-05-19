// import TrendingList from "../../components/TrendingList/TrendingList"
import PopularList from "../../components/PopularList/PopularList"
import UpcomingList from "../../components/UpcomingList/UpcomingList"
import { MainContainer, MainTitle, DecorateTitle, DecorateSircle } from "./Home.styled"
const Home = () => {
    return (
        <main>
            <MainContainer>
                <MainTitle>Movies for <DecorateTitle>all</DecorateTitle></MainTitle>
                <DecorateSircle></DecorateSircle>
                <PopularList />
                <UpcomingList />
            </MainContainer>
        </main>
    )
}
export default Home