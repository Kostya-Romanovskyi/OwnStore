import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../../APIs/LibraryAPI"
import { libraryEl } from "../../Redux/Slices/LibrarySlice"
import { MainContainer, Plug } from "./Library.styled"
import LibraryList from "../../components/LibraryList/LibraryList"
import { getGenres } from "../../APIs/GetMoviesLists"
import { setPath } from "../../Redux/Slices/PathSlice"
import { useLocation } from "react-router-dom"
import { CircleLoader } from "react-spinners"
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn"


const Library = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const librarySel = useSelector(libraryEl)

    useEffect(() => {
        dispatch(fetchMovies())
        dispatch(getGenres())
        dispatch(setPath(location))
    }, [dispatch, location])


    return (<main>
        <MainContainer className="app">

            {!librarySel.isLoading ?
                <>
                    {librarySel.library && librarySel.library.length !== 0 ?
                        <LibraryList libraryList={librarySel.library} />
                        :
                        <Plug>You haven`t movice in your library</Plug>}
                </>
                :
                <CircleLoader
                    color="#8b36d6"
                    cssOverride={{ margin: '0 auto' }}
                    loading
                    size={70}
                />}

            <ScrollTopBtn />
        </MainContainer>
    </main>)
}

export default Library