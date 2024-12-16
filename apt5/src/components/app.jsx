import Navbar from './navbar'
import Flat from './flat'
import SleepingRoom from './sleeping-room'
import LivingRoom from './living-room'
import DiningRoom from './dining-room'
import MovieRoom from './movie-room'
import Kitchen from './kitchen'
import Bathroom from './bathroom'
import HousekeepingRoom from './housekeeping-room'
import Roof from './roof'
import City from './city'
import Churches from './churches'
import Sights from './sights'
import Tours from './tours'
import Kids from './kids'
import Coast from './coast'
import Harbour from './harbour'
import Beaches from './beaches'
import Footer from './footer'
import Imprint from './imprint'
import FAQS from './faqs'
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
                <Route path="/housekeeping-room" element={<HousekeepingRoom/>}/>
                <Route path="/roof" element={<Roof/>}/>
                <Route path="/city" element={<City/>}/>
                <Route path="/churches" element={<Churches/>}/>
                <Route path="/sights" element={<Sights/>}/>
                <Route path="/tours" element={<Tours/>}/>
                <Route path="/kids" element={<Kids/>}/>
                <Route path="/coast" element={<Coast/>}/>
                <Route path="/harbour" element={<Harbour/>}/>
                <Route path="/beaches" element={<Beaches/>}/>
                <Route path="/imprint" element={<Imprint/>}/>
                <Route path="/faqs" element={<FAQS/>}/>
            </Routes>
            <Footer/>
        </>
        </Router>
    );
}

export default App;