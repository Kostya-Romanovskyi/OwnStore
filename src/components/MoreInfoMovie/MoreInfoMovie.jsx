import { useSelector } from "react-redux"
import { movieById } from "../../Redux/Slices/MovieById"
import { SectionMore, MoreInfoStyled, Info, ListStyled, ItemStyled, NumberStyled, TextStyled } from "./MoreInfoMovie.styled"

const MoreInfoMovie = () => {

    const { budget, vote_average, vote_count, runtime } = useSelector(movieById)

    return (<SectionMore>
        <MoreInfoStyled>More<Info>Info</Info></MoreInfoStyled>
        <ListStyled>
            <ItemStyled>
                <NumberStyled>{vote_average && vote_average.toFixed(1)}</NumberStyled>
                <TextStyled>Rating</TextStyled>
            </ItemStyled>
            <ItemStyled>
                <NumberStyled>{budget && budget.toLocaleString('en-US')}</NumberStyled>
                <TextStyled>Budget</TextStyled>
            </ItemStyled>
            <ItemStyled>
                <NumberStyled>{vote_count && vote_count.toLocaleString('en-US')}</NumberStyled>
                <TextStyled>Vote count</TextStyled>
            </ItemStyled>
            <ItemStyled>
                <NumberStyled>{runtime && runtime.toLocaleString('en-US')}</NumberStyled>
                <TextStyled>Runtime</TextStyled>
            </ItemStyled>
        </ListStyled>
    </SectionMore>)
}
export default MoreInfoMovie