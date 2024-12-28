import { useState } from 'react';
import { Link } from 'react-router-dom'

function NavbarEn() {

    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => setIsMenuOpen(false);

    return ( 
        <div>
            <header>
                <nav>
                    <div className='logo'>
                        <p><Link to={'/en'}>Apt 5</Link></p>
                    </div>
                    <div className="mobile-menu" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <div className='menu-items'>
                            <div className="dropdown">
                                <Link to={'/en'} onClick={closeMenu}>The Flat</Link>
                                    <div className="dropdown-content">
                                        <Link to='/en/sleeping-room'>Sleeping Room</Link>
                                        <Link to='/en/living-room'>Living Room</Link>
                                        <Link to='/en/dining-room'>Dining Room</Link>
                                        <Link to='/en/movie-room'>Cinema Room</Link>
                                        <Link to='/en/kitchen'>Kitchen</Link>
                                        <Link to='/en/bathroom'>Bathroom</Link>
                                        <Link to='/en/housekeeping-room'>Housekeeping Room</Link>
                                        <Link to='/en/roof'>Roof</Link>
                                    </div>
                            </div>
                            <div className="dropdown">
                                <Link to={'/en/city'} onClick={closeMenu}>The City</Link>
                                    <div className="dropdown-content">
                                        <Link to='/en/churches'>Churches</Link>
                                        <Link to='/en/sights'>Sights</Link>
                                        <Link to='/en/tours'>Tours</Link>
                                        <Link to='/en/kids'>Children</Link>
                                    </div>
                            </div>
                            <div className="dropdown">
                                <Link to={'/en/coast'} onClick={closeMenu}>The Coast</Link>
                                <div className="dropdown-content">
                                    <Link to='/en/harbour'>Harbour</Link>
                                    <Link to='/en/beaches'>Beaches</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button style={{ width: '110px', height: '30px' }}>
                                <Link to="https://www.airbnb.com/h/annes-apartment5-in-wismar" 
                                        style={{fontSize: '13px'}}
                                        onClick={closeMenu}>
                                    <strong>&rarr; Book here</strong>
                                </Link>
                            </button>
                        </div>
                        <div className="flag-toggle">
                        <Link to={isHovered ? '/de' : '/en'}>
                                <img 
                                    src={isHovered ? "/assets/nav-img/de-flag.PNG" : "/assets/nav-img/en-flag.PNG"} 
                                    alt={isHovered ? "German Flag" : "British Flag"} 
                                    width="25" 
                                    height="15"
                                    onMouseEnter={() => setIsHovered(true)} 
                                    onMouseLeave={() => setIsHovered(false)}
                                />
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavbarEn;