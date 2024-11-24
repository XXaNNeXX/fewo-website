import Navbar from './navbar'
import Flat from './flat'
import SleepingRoom from './sleeping-room'
import LivingRoom from './living-room'
import DiningRoom from './dining-room'
import MovieRoom from './movie-room'
import Kitchen from './kitchen'
import Bathroom from './bathroom'
import City from './city'
import Coast from './coast'
import Footer from './footer'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from 'react'

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {

    return (
        <Router>
            <ScrollToTop />
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Flat/>}/>
                <Route path="/sleeping-room" element={<SleepingRoom/>}/>
                <Route path="/living-room" element={<LivingRoom/>}/>
                <Route path="/dining-room" element={<DiningRoom/>}/>
                <Route path="/movie-room" element={<MovieRoom/>}/>
                <Route path="/kitchen" element={<Kitchen/>}/>
                <Route path="/bathroom" element={<Bathroom/>}/>
                <Route path="/town" element={<City/>}/>
                <Route path="/coast" element={<Coast/>}/>
            </Routes>
            <Footer/>
        </>
        </Router>
    );
}

export default App;