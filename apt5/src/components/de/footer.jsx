import { Link } from 'react-router-dom'

function FooterDe() {

    return (
        <div>
            <footer>
                <div className="footer-box">
                    <div className="footer-container">
                        <div className="footer-columns">
                            <Link to={'/imprint'} className='link-style'>
                                <p>Impressum</p>
                            </Link>
                        </div>
                        <div className="footer-columns">
                            <Link to={'/faqs'} className='link-style'>
                                <p>FAQs</p>
                            </Link>
                        </div>
                        <div className="footer-columns">
                        <Link to="https://www.airbnb.com/h/annes-apartment5-in-wismar" className='link-style'>
                            <p className="p-lang-de">Auf Airbnb buchen</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterDe;