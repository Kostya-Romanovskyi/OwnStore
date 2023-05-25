import PropTypes from 'prop-types';
import { StyledLink } from "./MainButton.styled";




const MainButton = ({ route, content }) => {
    return <StyledLink to={route} >{content}</StyledLink>
}
export default MainButton;

MainButton.propTypes = {
    route: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};