import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getReviewsById } from "../../APIs/GetById"
import { useParams } from "react-router-dom"
import { MainContainer } from "./Reviews.styled"
import ScrollToTop from "../../components/ScrollToTop"
import ReviewsList from "../../components/ReviewsList/ReviewsList"

const Reviews = () => {
    const dispatch = useDispatch()
    const { movieId } = useParams()
    console.log(movieId)

    useEffect(() => {
        dispatch(getReviewsById(movieId))
    }, [dispatch, movieId])

    return (<main>
        <ScrollToTop />
        <MainContainer>
            <ReviewsList />
        </MainContainer>
    </main>)
}
export default Reviews