import { Link } from 'react-router-dom'

function FooterDe() {

    return (
        <div>
            <footer>
                <div className="footer-box">
                    <div className="footer-container">
                        <div className="footer-columns">
                            <Link to={'/de/imprint'} className='link-style'>
                                <p>Impressum</p>
                            </Link>
                        </div>
                        <div className="footer-columns">
                            <Link to={'/de/faqs'} className='link-style'>
                                <p>FAQs</p>
                            </Link>
                        </div>
                        <div className="footer-columns">
                        <Link to="https://www.airbnb.com/h/annes-apartment5-in-wismar" className='link-style'>
                            <p>Auf Airbnb buchen</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterDe;