import PropTypes from 'prop-types';
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { castByIdLoading } from '../../Redux/Slices/CastById';
import { CircleLoader } from "react-spinners"
import { getCastById } from "../../APIs/GetById"
import ActorsList from "../../components/ActorsList/ActorsList"
import { MainContainer, BackLink } from "./Cast.styled"
import ScrollToTop from "../../components/ScrollToTop"
import ScrollTopBtn from '../../components/ScrollTopBtn/ScrollTopBtn';


const Cast = ({ backPath }) => {
    const dispatch = useDispatch()
    const { movieId } = useParams()

    const castByIdLoadingSel = useSelector(castByIdLoading)

    useEffect(() => {
        dispatch(getCastById(movieId))
    }, [dispatch, movieId])

    return (<main className='app'>
        <ScrollToTop />

        {!castByIdLoadingSel ?
            <MainContainer>
                <BackLink to={backPath?.pathname ?? `/search/${movieId}`}>Go back</BackLink>
                <ActorsList />
            </MainContainer>
            :
            <CircleLoader
                color="#8b36d6"
                cssOverride={{ margin: '0 auto' }}
                loading
                size={70}
            />}

        <ScrollTopBtn />

    </main>)
}
export default Cast

Cast.propTypes = {
    backPath: PropTypes.object.isRequired
};