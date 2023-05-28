import PropTypes from 'prop-types';
import MainCard from "../MainCard/MainCard"
import { GridList, Item } from './SearchList.styled';
import { useLocation } from 'react-router-dom';

const SearchList = ({ list }) => {
    const location = useLocation()

    return <GridList>

        {list.map(({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
            return <Item key={id}>
                <MainCard id={id} title={title} poster={poster_path} vote={vote_average} date={release_date} genre={genre_ids} location={location} />
            </Item>

        })}

    </GridList >
}
export default SearchList

SearchList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};