import { useState } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {

    const [isHovered, setIsHovered] = useState(false);

    return ( 
        <div>
            <header>
                <nav>
                    <div className='logo'>
                        <p><Link to={'/'}>Apt 5</Link></p>
                    </div>
                    <div className='menu'>
                        <div className='menu-items'>
                            <div className="dropdown">
                                <Link to={'/'}>Die Wohnung</Link>
                                    <div className="dropdown-content">
                                        <Link to='/sleeping-room'>Schlafzimmer</Link>
                                        <Link to='/living-room'>Wohnzimmer</Link>
                                        <Link to='/dining-room'>Esszimmer</Link>
                                        <Link to='/movie-room'>Kinozimmer</Link>
                                        <Link to='/kitchen'>Küche</Link>
                                        <Link to='/bathroom'>Badezimmer</Link>
                                        <Link to='/housekeeping-room'>Hauswirtschaftsraum</Link>
                                        <Link to='/roof'>Dach</Link>
                                    </div>
                            </div>
                            <div className="dropdown">
                                <Link to={'/city'}>Die Stadt</Link>
                                    <div className="dropdown-content">
                                        <Link to='/churches'>Kirchen</Link>
                                        <Link to='/sights'>Sehenswürdigkeiten</Link>
                                        <Link to='/tours'>Touren</Link>
                                        <Link to='/kids'>Kinder</Link>
                                    </div>
                            </div>
                            <div className="dropdown">
                                <Link to={'/coast'}>Die Küste</Link>
                                <div className="dropdown-content">
                                    <Link to='/harbour'>Hafen</Link>
                                    <Link to='/beaches'>Strände</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button style={{ width: '110px', height: '30px' }}>
                                <Link to="https://www.airbnb.com/h/annes-apartment5-in-wismar" style={{fontSize: '13px'}}>
                                    <strong>&rarr; Hier buchen</strong>
                                </Link>
                            </button>
                        </div>
                        <div 
                            className="flag-toggle" 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img 
                                src={isHovered ? "/assets/nav-img/en-flag.PNG" : "/assets/nav-img/de-flag.PNG"} 
                                alt={isHovered ? "British Flag" : "German Flag"} 
                                width="25" 
                                height="15"
                            />
                            <div className="flag-en">
                                <Link to="https://www.apartment5.de/en/home">
                                    <img src="/assets/nav-img/en-flag.PNG" alt="British Flag" width="25" height="15"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;