import { useState } from 'react'
import { socials, contacts } from '../constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [show, setShow] = useState(false)
    const showClass = show ? 'showMenu' : 'hideMenu'

    return (
        <header>
            <nav className="topnav p-0 pb-0 is-small bg-dark-blue has-text-white" role="navigation" aria-label="main navigation">
                <div className="container is-max-widescreen is-flex">
                    <div className="navbar-start">
                        <div className="navbar-item has-text-grey-lighter is-size-7"><FontAwesomeIcon icon={faHome} className="mr-2" /> 379 51h Ave New York, Nyc 10018</div>
                        <div className="navbar-item has-text-grey-lighter is-size-7"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> (+1)96 716 6879</div>
                        <div className="navbar-item has-text-grey-lighter is-size-7"><FontAwesomeIcon icon={faClock} className="mr-2" /> Mon-Sat 09:00 am/Sunday CLOSE</div>
                    </div>

                    <div className="navbar-end mt-1">
                        <a href={socials.facebook}><div className="navbar-item is-size-6o5 has-text-grey-lighter"><FontAwesomeIcon icon={faFacebook} /></div></a>
                        <a href={socials.google}><div className="navbar-item is-size-6o5 has-text-light"><FontAwesomeIcon icon={faGooglePlus} /></div></a>
                        <a href={socials.twitter}><div className="navbar-item is-size-6o5 has-text-light"><FontAwesomeIcon icon={faTwitter} /></div></a>
                        <a href={socials.instagram}><div className="navbar-item is-size-6o5 has-text-light"><FontAwesomeIcon icon={faInstagram} /></div></a>
                        <a href={socials.linkedin}><div className="navbar-item is-size-6o5 has-text-light"><FontAwesomeIcon icon={faLinkedin} /></div></a>
                    </div>
                </div>
            </nav>


            <nav className="navbar pt-3 pb-3" role="navigation" aria-label="main navigation">
                <div className="container is-max-widescreen">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <b className="title is-size-3"><span className="has-text-success">A</span>RGES</b>
                        </a>

                        <a role="button" onClick={() => setShow(!show)} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item">Home</a>
                            <a className="navbar-item">About Us</a>
                            <a className="navbar-item">Services</a>
                            <a className="navbar-item">Home</a>
                            <a className="navbar-item">Projects</a>
                            <a className="navbar-item">Shop</a>
                            <a className="navbar-item">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={"mobile-menu is-flex is-flex-direction-column has-text-centered pt-6 " + showClass}>
                <a className="navbar-item">Home</a>
                <a className="navbar-item">About Us</a>
                <a className="navbar-item">Services</a>
                <a className="navbar-item">Home</a>
                <a className="navbar-item">Projects</a>
                <a className="navbar-item">Shop</a>
                <a className="navbar-item">Contact Us</a>
            </div >
        </header >
    )
}

export default Header