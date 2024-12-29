import { Link } from 'react-router-dom'

function FooterEn() {

    return (
        <div>
            <footer>
                <div className="footer-box">
                    <div className="footer-container">
                        <div className="footer-columns">
                            <Link to={'/en/imprint'} className='link-style'>
                                <p>Imprint</p>
                            </Link>
                        </div>
                        <div className="footer-columns">
                            <Link to={'/en/faqs'} className='link-style'>
                                <p>FAQs</p>
                            </Link>
                        </div>
                        <div className="footer-columns">
                        <Link to="https://www.airbnb.com/h/annes-apartment5-in-wismar" className='link-style'>
                            <p className="p-lang-en">Book on Airbnb</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterEn;