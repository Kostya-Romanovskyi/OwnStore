import PropTypes from 'prop-types';
import { Poster, InfoWrapp, TitleWrapp, Title, LikeButton, StatWrapp, Date, Vote } from '../UpcomingList/UpcomingList.styled'
import { CardWrapp, Item, StyledLink } from './LittleCard.styled'

const LittleCard = ({ img, title, date, vote, id, language }) => {

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    return <Item>
        <StyledLink to={`/search/${id}`}>
            <CardWrapp>
                <Poster src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />

                <InfoWrapp>
                    <TitleWrapp>
                        <Title>{truncateString(title, 15)}</Title>
                        <LikeButton>{language}</LikeButton>
                    </TitleWrapp>
                    <StatWrapp>
                        <Date>{date}</Date>
                        <Vote>Rating:  {vote.toFixed(2)}</Vote>
                    </StatWrapp>
                </InfoWrapp>
            </CardWrapp>
        </StyledLink>
    </Item>
}

export default LittleCard;

LittleCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};