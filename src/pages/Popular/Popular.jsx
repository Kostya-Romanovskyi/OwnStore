import FullPopularList from "../../components/FullPopularList/FullPopularList"
import { MainContainer, PopularMovies } from "./Popular.styled"

const Popular = () => {
    return (<>

        <MainContainer>
            <PopularMovies>Popular movies</PopularMovies>
            <FullPopularList />
        </MainContainer>

    </>)
}
export default Popular