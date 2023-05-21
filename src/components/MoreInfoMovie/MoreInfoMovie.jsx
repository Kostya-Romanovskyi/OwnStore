import { useSelector } from "react-redux"
import { movieById } from "../../Redux/Slices/MovieById"
import { MoreInfoStyled, Info, ListStyled, ItemStyled, NumberStyled, TextStyled } from "./MoreInfoMovie.styled"

const MoreInfoMovie = () => {

    const { budget, vote_average, vote_count, runtime } = useSelector(movieById)

    return (<>
        <MoreInfoStyled>More<Info>Info</Info></MoreInfoStyled>
        <ListStyled>
            <ItemStyled>
                <NumberStyled>{vote_average}</NumberStyled>
                <TextStyled>Rating</TextStyled>
            </ItemStyled>
            <ItemStyled>
                <NumberStyled>{budget}</NumberStyled>
                <TextStyled>Budget</TextStyled>
            </ItemStyled>
            <ItemStyled>
                <NumberStyled>{vote_count}</NumberStyled>
                <TextStyled>Vote count</TextStyled>
            </ItemStyled>
            <ItemStyled>
                <NumberStyled>{runtime}</NumberStyled>
                <TextStyled>Runtime</TextStyled>
            </ItemStyled>
        </ListStyled>
    </>)
}
export default MoreInfoMovie