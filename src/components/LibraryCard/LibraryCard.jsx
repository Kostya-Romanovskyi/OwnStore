import PropTypes from 'prop-types';
import ErrorPoster from '../../assets/ErrorPoster.jpg'
import { Item, Poster, Container, FlexWrapp, TitleFilm, Statistic, Button } from "./LibraryCard.styled";

const LibraryCard = ({ id, title, poster, vote, date, genre }) => {
    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    return (
        <Item>
            <Poster src={poster !== null ? `https://image.tmdb.org/t/p/w500${poster}` : ErrorPoster} alt={title} />
            <Container>
                <FlexWrapp>
                    <TitleFilm>{truncateString(title, 15)}</TitleFilm>
                    <Statistic>{vote.toFixed(1)}</Statistic>
                </FlexWrapp>
                <FlexWrapp>
                    <Statistic>{date}</Statistic>
                    <Statistic>{genre[0].name}</Statistic>
                </FlexWrapp>
                <Button to={`/search/${id}`} >film page</Button>
            </Container>
        </Item>
    )
}
export default LibraryCard;

LibraryCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
    poster: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
    location: PropTypes.object,
};