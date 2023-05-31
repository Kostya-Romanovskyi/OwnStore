import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from './Redux/Slices/AuthSlice'
import './App.css'
import Header from './components/Header/Header'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Movie from './pages/Movie/Movie'
import Library from './pages/Library/Library'
import About from './pages/About/About'
import Cast from './pages/Cast/Cast'
import Reviews from './pages/Reviews/Reviews'
import Popular from './pages/Popular/Popular'
import TopRated from './pages/TopRated/TopRated'
import Upcoming from './pages/Upcoming/Upcoming'
import Trending from './pages/Trending/Trending'
import NowPlaying from './pages/NowPlaying/NowPlaying'
import Footer from './components/Footer/Footer'
import { pathBack } from './Redux/Slices/PathSlice'


function App() {
    const [pathCast, setPathCast] = useState({})
    const [pathReviews, setPathReviews] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        const storedAuthData = localStorage.getItem("auth");

        if (storedAuthData) {
            const { name, email, uid } = JSON.parse(storedAuthData);

            dispatch(logIn({ name, email, uid }));
        } else {
            dispatch(logOut());
        }

    }, [dispatch]);

    return (
        <div className='test-wrapper'>
            <Routes>
                <Route path='/' element={<Header />}>

                    <Route index path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/search" element={<Search />} />

                    <Route path="/search/:movieId" element={<Movie pathCast={setPathCast} pathReviews={setPathReviews} />} />
                    <Route path="/search/:movieId/cast" element={<Cast backPath={pathCast} />} />
                    <Route path="/search/:movieId/reviews" element={<Reviews backPath={pathReviews} />} />

                    <Route path="/popular" element={<Popular />} />

                    <Route path="/toprated" element={<TopRated />} />

                    <Route path="/upcoming" element={<Upcoming />} />

                    <Route path="/trending" element={<Trending />} />

                    <Route path="/nowplaying" element={<NowPlaying />} />

                    <Route path='/library' element={<Library />} />

                    <Route path="/about" element={<About />} />

                    <Route path="*" element={<Navigate to='/' />} />

                </Route>
            </Routes>

            <Footer />
        </div >
    )
}

export default App
