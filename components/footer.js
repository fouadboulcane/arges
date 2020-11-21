
import { socials, contacts } from '../constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {

    return (
        <>
            <footer className="section footer-section bg-dark-blue pb-6">
                <div className="container is-max-widescreen">
                    <div className="columns is-justify-content-space-between has-text-white">

                        <div className="column">
                            <div className="">
                                <h5 className="title is-size-5 has-text-white">Contact Us</h5>
                                <p className="is-size-6o5">Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Tempore vel exercitationem tenetur saepe quidem, beatae laborum, libero veniam enim ratione dolore, sunt.</p>
                                <div className="socials mt-5 is-flex">
                                    <a href={socials.facebook}><div><FontAwesomeIcon icon={faFacebook} /></div></a>
                                    <a href={socials.google}><div><FontAwesomeIcon icon={faGooglePlus} /></div></a>
                                    <a href={socials.twitter}><div><FontAwesomeIcon icon={faTwitter} /></div></a>
                                    <a href={socials.instagram}><div><FontAwesomeIcon icon={faInstagram} /></div></a>
                                    <a href={socials.linkedin}><div><FontAwesomeIcon icon={faLinkedin} /></div></a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="is-size-6o5">
                                <h5 className="title is-size-5 has-text-white">Contact Us</h5>
                                <div>
                                    <p><FontAwesomeIcon icon={faHome} className="mr-2" /> {contacts.address}</p>
                                    <p className="mt-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {contacts.email}</p>
                                    <p className="mt-2">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> {contacts.phone} <br />
                                        <span className="ml-4">&nbsp;&nbsp;{contacts.phone2}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="">
                                <h5 className="title is-size-5 has-text-white">Company</h5>
                                <div className="columns is-size-6o5">
                                    <ul className="column">
                                        <li>Home</li>
                                        <li>Projects</li>
                                        <li>Services</li>
                                        <li>About Us</li>
                                        <li>Contact</li>
                                    </ul>
                                    <ul className="column">
                                        <li>Blogs</li>
                                        <li>404 Page</li>
                                        <li>Shop</li>
                                        <li>Elements</li>
                                        <li>Typography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="">
                                <h5 className="title is-size-5 has-text-white">Gallery</h5>

                                <div className="is-flex">
                                    <figure className="image is-64x64 mr-2">
                                        <img src="https://picsum.photos/64/64" />
                                    </figure>

                                    <figure className="image is-64x64 mr-2">
                                        <img src="https://picsum.photos/64/64" />
                                    </figure>
                                    <figure className="image is-64x64 mr-2">
                                        <img src="https://picsum.photos/64/64" />
                                    </figure>
                                </div>

                                <div className="is-flex mt-2">
                                    <figure className="image is-64x64 mr-2">
                                        <img src="https://picsum.photos/64/64" />
                                    </figure>

                                    <figure className="image is-64x64 mr-2">
                                        <img src="https://picsum.photos/64/64" />
                                    </figure>
                                    <figure className="image is-64x64 mr-2">
                                        <img src="https://picsum.photos/64/64" />
                                    </figure>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            <footer>
                <div className="has-text-centered has-text-grey-lighter is-size-6o5 bg-dark-blue p-3">Copyright @ 2020 Designed by fouad. All rights reserved</div>
            </footer>
        </>
    )
}


export default Footer