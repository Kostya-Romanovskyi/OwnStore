import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCastById } from "../../APIs/GetById"
import { useParams } from "react-router-dom"
import ActorsList from "../../components/ActorsList/ActorsList"
import { MainContainer } from "./Cast.styled"
import ScrollToTop from "../../components/ScrollToTop"

const Cast = () => {
    const dispatch = useDispatch()
    const { movieId } = useParams()

    useEffect(() => {
        dispatch(getCastById(movieId))
    }, [dispatch, movieId])

    return (<main>
        <ScrollToTop />
        <MainContainer>
            <ActorsList />
        </MainContainer>
    </main>)
}
export default Cast