import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getReviewsById } from "../../APIs/GetById"
import { useParams } from "react-router-dom"
import { MainContainer, BackLink } from "./Reviews.styled"
import ScrollToTop from "../../components/ScrollToTop"
import ReviewsList from "../../components/ReviewsList/ReviewsList"

const Reviews = ({ backPath }) => {
    const dispatch = useDispatch()
    const { movieId } = useParams()
    console.log(movieId)

    useEffect(() => {
        dispatch(getReviewsById(movieId))
    }, [dispatch, movieId])

    return (<main>
        <ScrollToTop />
        <MainContainer className='app'>
            <BackLink to={backPath?.pathname ?? `/search/${movieId}`}>Go back</BackLink>
            <ReviewsList />
        </MainContainer>
    </main>)
}
export default Reviews

Reviews.propTypes = {
    backPath: PropTypes.object.isRequired
};