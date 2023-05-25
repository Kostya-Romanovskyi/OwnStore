import PropTypes from 'prop-types';
import MainCard from "../MainCard/MainCard"
import { GridList, Item } from './SearchList.styled';

const SearchList = ({ list }) => {
    console.log(list)

    return <GridList>

        {list.map(({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
            return <Item key={id}>
                <MainCard id={id} title={title} poster={poster_path} vote={vote_average} date={release_date} genre={genre_ids} />
            </Item>

        })}

    </GridList >
}
export default SearchList

SearchList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};