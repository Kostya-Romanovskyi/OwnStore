// import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import Library from './pages/Library'
import About from './pages/About'



function App() {
    return (
        <div className='test-wrapper'>
            <Routes>
                <Route path='/' element={<Header />}>

                    <Route index path="/" element={<Home />} />

                    <Route path="/search" element={<Search />} />

                    <Route path="/favorite" element={<Favorite />} />

                    <Route path="/library" element={<Library />} />

                    <Route path="/about" element={<About />} />

                </Route>
            </Routes>
        </div >
    )
}

export default App
