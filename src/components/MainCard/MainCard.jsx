import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ErrorPoster from '../../assets/ErrorPoster.jpg'
import { Poster, Container, FlexWrapp, TitleFilm, Statistic, Button } from "./MainCard.styled"
import { genres } from "../../Redux/Slices/GenresSlice"


const MainCard = ({ id, title, poster, vote, date, genre }) => {
    const genresSel = useSelector(genres)

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }
    const getGenreName = (id) => {
        const genre = genresSel && genresSel.find((genre) => genre.id === id);
        return genre ? genre.name : 'Unknown';
    };

    const genreNames = genre.map((id) => getGenreName(id));

    return (<div style={{ backgroundColor: '#1e1b33', borderRadius: 12, paddingBottom: 2 }}>
        <Poster src={poster !== null ? `https://image.tmdb.org/t/p/w500${poster}` : ErrorPoster} alt={title} />
        <Container>
            <FlexWrapp>
                <TitleFilm>{truncateString(title, 15)}</TitleFilm>
                <Statistic>{vote.toFixed(1)}</Statistic>
            </FlexWrapp>
            <FlexWrapp>
                <Statistic>{date}</Statistic>
                <Statistic>{genreNames[0]}</Statistic>
            </FlexWrapp>
            <Button to={`/search/${id}`} >film page</Button>
        </Container>
    </div>)
}
export default MainCard

MainCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
    poster: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.number).isRequired,
    location: PropTypes.object
};