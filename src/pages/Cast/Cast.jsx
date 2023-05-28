import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { getCastById } from "../../APIs/GetById"
import { useParams } from "react-router-dom"
import ActorsList from "../../components/ActorsList/ActorsList"
import { MainContainer, BackLink } from "./Cast.styled"
import ScrollToTop from "../../components/ScrollToTop"

const Cast = ({ backPath }) => {
    const dispatch = useDispatch()
    const { movieId } = useParams()

    useEffect(() => {
        dispatch(getCastById(movieId))
    }, [dispatch, movieId])

    return (<main className='app'>
        <ScrollToTop />
        <MainContainer>
            <BackLink to={backPath?.pathname ?? `/search/${movieId}`}>Go back</BackLink>
            <ActorsList />
        </MainContainer>
    </main>)
}
export default Cast

Cast.propTypes = {
    backPath: PropTypes.object.isRequired
};