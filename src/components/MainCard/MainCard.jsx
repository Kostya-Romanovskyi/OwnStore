import PropTypes from 'prop-types';
import { Poster, Container, FlexWrapp, TitleFilm, Statistic, Button } from "./MainCard.styled"

const MainCard = ({ id, title, poster, vote, date, genre }) => {

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    return (<>
        <Poster src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        <Container>
            <FlexWrapp>
                <TitleFilm>{truncateString(title, 15)}</TitleFilm>
                <Statistic>{vote}</Statistic>
            </FlexWrapp>
            <FlexWrapp>
                <Statistic>{date}</Statistic>
                <Statistic>{genre.map(genre => genre)}</Statistic>
            </FlexWrapp>
            <Button to={`/search/${id}`}>film page</Button>
        </Container>
    </>)
}
export default MainCard

MainCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.number).isRequired
};