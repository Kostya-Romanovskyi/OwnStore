import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Movie from './pages/Movie/Movie'
import Favorite from './pages/Favorite'
import Library from './pages/Library/Library'
import About from './pages/About'
import Cast from './pages/Cast/Cast'
import Reviews from './pages/Reviews/Reviews'
import Popular from './pages/Popular/Popular'
import TopRated from './pages/TopRated/TopRated'
import Upcoming from './pages/Upcoming/Upcoming'
import Trending from './pages/Trending/Trending'
import NowPlaying from './pages/NowPlaying/NowPlaying'
import Footer from './components/Footer/Footer'


function App() {
    const [pathCast, setPathCast] = useState({})
    const [pathReviews, setPathReviews] = useState({})

    return (
        <div className='test-wrapper'>
            <Routes>
                <Route path='/' element={<Header />}>

                    <Route index path="/" element={<Home />} />

                    <Route path="/search" element={<Search />} />

                    <Route path="/search/:movieId" element={<Movie pathCast={setPathCast} pathReviews={setPathReviews} />} />
                    <Route path="/search/:movieId/cast" element={<Cast backPath={pathCast} />} />
                    <Route path="/search/:movieId/reviews" element={<Reviews backPath={pathReviews} />} />

                    <Route path="/popular" element={<Popular />} />

                    <Route path="/toprated" element={<TopRated />} />

                    <Route path="/upcoming" element={<Upcoming />} />

                    <Route path="/trending" element={<Trending />} />

                    <Route path="/nowplaying" element={<NowPlaying />} />

                    <Route path="/favorite" element={<Favorite />} />

                    <Route path="/library" element={<Library />} />

                    <Route path="/about" element={<About />} />

                    <Route path="*" element={<Navigate to='/' />} />

                </Route>
            </Routes>

            <Footer />
        </div >
    )
}

export default App
