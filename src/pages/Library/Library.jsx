import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { CircleLoader } from "react-spinners"
import { MainContainer, Plug } from "./Library.styled"
import LibraryList from "../../components/LibraryList/LibraryList"
import { getGenres } from "../../APIs/GetMoviesLists"
import { setPath } from "../../Redux/Slices/PathSlice"
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn"
import { authInfo } from "../../Redux/Slices/AuthSlice"
import { fetchFirebaseData } from "../../APIs/LibraryAPI"
import { firebaseLibrary } from "../../Redux/Slices/FireBaseLibrarySlice"


const Library = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const authInfoSel = useSelector(authInfo)
    const librarySel = useSelector(firebaseLibrary)

    useEffect(() => {
        dispatch(fetchFirebaseData(authInfoSel.uid))
        dispatch(getGenres())
        dispatch(setPath(location))

    }, [authInfoSel.uid, dispatch, location])



    return (<main>

        <MainContainer className="app">

            {authInfoSel.isLoggedIn ? !librarySel.isLoading ?
                <>
                    {librarySel.data && librarySel.data.length !== 0 ?
                        <LibraryList libraryList={librarySel.data} />
                        :
                        <Plug>You haven`t movice in your library</Plug>}
                </>
                :
                <CircleLoader
                    color="#8b36d6"
                    cssOverride={{ margin: '0 auto' }}
                    loading
                    size={70}
                /> : <Plug>You need to logged in for added movies in library</Plug>}


            <ScrollTopBtn />

        </MainContainer>

    </main>)
}

export default Library