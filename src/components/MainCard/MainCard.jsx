import PropTypes from 'prop-types';
import ErrorPoster from '../../assets/ErrorPoster.jpg'
import { Poster, Container, FlexWrapp, TitleFilm, Statistic, Button } from "./MainCard.styled"

const MainCard = ({ id, title, poster, vote, date, genre, location }) => {

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    return (<>
        <Poster src={poster !== null ? `https://image.tmdb.org/t/p/w500${poster}` : ErrorPoster} alt={title} />
        <Container>
            <FlexWrapp>
                <TitleFilm>{truncateString(title, 15)}</TitleFilm>
                <Statistic>{vote.toFixed(1)}</Statistic>
            </FlexWrapp>
            <FlexWrapp>
                <Statistic>{date}</Statistic>
                <Statistic>{genre.map(genre => genre)}</Statistic>
            </FlexWrapp>
            <Button to={`/search/${id}`} state={{ from: location }}>film page</Button>
        </Container>
    </>)
}
export default MainCard

MainCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
    poster: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.number).isRequired,
    location: PropTypes.object.isRequired
};