import PropTypes from 'prop-types';
import { Poster, InfoWrapp, TitleWrapp, Title, LikeButton, StatWrapp, Date, Vote } from '../UpcomingList/UpcomingList.styled'
import { Item } from './LittleCard.styled'
const LittleCard = ({ img, title, date, vote }) => {

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    return <Item>
        <Poster src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />

        <InfoWrapp>
            <TitleWrapp>
                <Title>{truncateString(title, 15)}</Title>
                <LikeButton>like</LikeButton>
            </TitleWrapp>
            <StatWrapp>
                <Date>{date}</Date>
                <Vote>{vote}</Vote>
            </StatWrapp>
        </InfoWrapp>
    </Item>
}

export default LittleCard;

LittleCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired
};