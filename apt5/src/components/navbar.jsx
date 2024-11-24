import { Link } from 'react-router-dom'

function Navbar() {

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
                                <div><Link to={'/'}>Die Wohnung</Link></div>
                                    <div className="dropdown-content">
                                        <Link to='/sleeping-room'>Schlafzimmer</Link>
                                        <Link to='/living-room'>Wohnzimmer</Link>
                                    </div>
                                </div>
                                <div><Link to={'/town'}>Die Stadt</Link></div>
                                <div><Link to={'/coast'}>Die Küste</Link></div>
                            </div>
                            <div>
                                <button style={{ width: '110px', height: '30px' }}>
                                    <img src="/assets/nav-img/airbnb_brand.png" alt="Button Logo" style={{ height: '15px', marginRight: '10px' }} />
                                    <Link to="https://www.airbnb.com/h/annes-apartment5-in-wismar">Airbnb</Link>
                                </button>
                            </div>
                            <div className="flag-dropdown">
                                <img src="/assets/nav-img/de-flag.PNG" alt="German Flag" width="25" height="15"/>
                                <div className="flag-dropdown-content">
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