import NavbarDe from './de/navbar'
import NavbarEn from './en/navbar'
import Flat from './de/flat'
import FlatEn from './en/flat'
import SleepingRoom from './de/sleeping-room'
import SleepingRoomEn from './en/sleeping-room'
import LivingRoom from './de/living-room'
import LivingRoomEn from './en/living-room'
import DiningRoom from './de/dining-room'
import DiningRoomEn from './en/dining-room'
import MovieRoom from './de/movie-room'
import MovieRoomEn from './en/movie-room'
import Kitchen from './de/kitchen'
import KitchenEn from './en/kitchen'
import Bathroom from './de/bathroom'
import BathroomEn from './en/bathroom'
import HousekeepingRoom from './de/housekeeping-room'
import HousekeepingRoomEn from './en/housekeeping-room'
import Roof from './de/roof'
import RoofEn from './en/roof'
import City from './de/city'
import CityEn from './en/city'
import Churches from './de/churches'
import ChurchesEn from './en/churches'
import Sights from './de/sights'
import SightsEn from './en/sights'
import Tours from './de/tours'
import ToursEn from './en/tours'
import Kids from './de/kids'
import KidsEn from './en/kids'
import Coast from './de/coast'
import CoastEn from './en/coast'
import Harbour from './de/harbour'
import HarbourEn from './en/harbour'
import Beaches from './de/beaches'
import BeachesEn from './en/beaches'
import FooterDe from './de/footer'
import FooterEn from './en/footer'
import Imprint from './de/imprint'
import ImprintEn from './en/imprint'
import FAQS from './de/faqs'
import FAQSEn from './en/faqs'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from 'react'

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Navbar() {
    const location = useLocation();
    const isEnglish = location.pathname.startsWith("/en");

    return isEnglish ? <NavbarEn /> : <NavbarDe />
}

function Footer() {
    const location = useLocation();
    const isEnglish = location.pathname.startsWith("/en");

    return isEnglish ? <FooterEn /> : <FooterDe />
}

function App() {

    return (
        <Router>
            <ScrollToTop />
            <Navbar />
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
                <Route path="/en" element={<FlatEn/>}/>
                <Route path="/en/sleeping-room" element={<SleepingRoomEn/>}/>
                <Route path="/en/living-room" element={<LivingRoomEn/>}/>
                <Route path="/en/dining-room" element={<DiningRoomEn/>}/>
                <Route path="/en/movie-room" element={<MovieRoomEn/>}/>
                <Route path="/en/kitchen" element={<KitchenEn/>}/>
                <Route path="/en/bathroom" element={<BathroomEn/>}/>
                <Route path="/en/housekeeping-room" element={<HousekeepingRoomEn/>}/>
                <Route path="/en/roof" element={<RoofEn/>}/>
                <Route path="/en/city" element={<CityEn/>}/>
                <Route path="/en/churches" element={<ChurchesEn/>}/>
                <Route path="/en/sights" element={<SightsEn/>}/>
                <Route path="/en/tours" element={<ToursEn/>}/>
                <Route path="/en/kids" element={<KidsEn/>}/>
                <Route path="/en/coast" element={<CoastEn/>}/>
                <Route path="/en/harbour" element={<HarbourEn/>}/>
                <Route path="/en/beaches" element={<BeachesEn/>}/>
                <Route path="/en/imprint" element={<ImprintEn/>}/>
                <Route path="/en/faqs" element={<FAQSEn/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;