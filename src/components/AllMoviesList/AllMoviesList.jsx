import PropTypes from 'prop-types';
import MainCard from "../MainCard/MainCard"
import { GridList, Item } from "./AllMoviesList.styled"

const AllMoviesList = ({ categoryInfo }) => {
    return (
        <GridList>
            {categoryInfo?.results && categoryInfo?.results.map(({ id, poster_path, title, vote_average, release_date, genre_ids
            }) =>
                <Item key={id}>

                    <MainCard id={id}
                        title={title}
                        poster={poster_path}
                        vote={vote_average}
                        date={release_date}
                        genre={genre_ids} />

                </Item>)}
        </GridList>
    )
}
export default AllMoviesList

AllMoviesList.propTypes = {
    categoryInfo: PropTypes.shape().isRequired,
};