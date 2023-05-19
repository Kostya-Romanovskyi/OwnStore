import TrendingList from "../../components/TrendingList/TrendingList"
import { MainContainer, MainTitle, DecorateTitle, DecorateSircle } from "./Home.styled"
const Home = () => {
    return (
        <main>
            <MainContainer>
                <MainTitle>Movies for <DecorateTitle>all</DecorateTitle></MainTitle>
                <DecorateSircle></DecorateSircle>
                <TrendingList />
            </MainContainer>
        </main>
    )
}
export default Home