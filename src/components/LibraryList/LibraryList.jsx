import PropTypes from 'prop-types';
import LibraryCard from '../LibraryCard/LibraryCard';
import { List } from "./LibraryList.styled"

const LibraryList = ({ libraryList }) => {

    return (<List>

        {libraryList && libraryList.map(({ movieId, title, poster_path, vote_average, release_date, genres }) => {
            return <LibraryCard key={movieId} id={movieId} title={title} poster={poster_path} vote={vote_average} date={release_date} genre={genres} />
        })}

    </List>)
}
export default LibraryList

LibraryList.propTypes = {
    libraryList: PropTypes.arrayOf(PropTypes.shape({}),),
};