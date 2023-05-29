import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getReviewsById } from "../../APIs/GetById"
import { useParams } from "react-router-dom"
import { MainContainer, BackLink } from "./Reviews.styled"
import ScrollToTop from "../../components/ScrollToTop"
import ReviewsList from "../../components/ReviewsList/ReviewsList"
import { CircleLoader } from "react-spinners"
import { reviewsByIdLoading } from '../../Redux/Slices/ReviewsById';
import ScrollTopBtn from '../../components/ScrollTopBtn/ScrollTopBtn';

const Reviews = ({ backPath }) => {
    const dispatch = useDispatch()
    const { movieId } = useParams()

    const reviewsLoading = useSelector(reviewsByIdLoading)

    useEffect(() => {
        dispatch(getReviewsById(movieId))
    }, [dispatch, movieId])

    return (
        <main className='app'>

            <ScrollToTop />

            {!reviewsLoading ? <MainContainer >
                <BackLink to={backPath?.pathname ?? `/search/${movieId}`}>Go back</BackLink>
                <ReviewsList />
            </MainContainer> : <CircleLoader
                color="#8b36d6"
                cssOverride={{ margin: '0 auto' }}
                loading
                size={70}
            />}

            <ScrollTopBtn />

        </main>)
}
export default Reviews

Reviews.propTypes = {
    backPath: PropTypes.object.isRequired
};