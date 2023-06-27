import './contacts.css'
import React from 'react'
import map from "./assets/map/mapimage.jpeg"
import { Link } from 'react-router-dom'

const ContactsPage = () => {

    return (
        <div className='contact-top'>
            <div className='name'>
                <p className='con-name'>CONTACT US</p>
            </div>
            <div className='bar'>
                <div className='info'>
                <p className='reg-text'> <p className='head-text'>Address:</p>IEEE NITC, National Institute of Technology Calicut,
                     <br />NIT Campus P.O 673 601,
                     <br />Kozhikode, India.</p>
                <p className='reg-text'> <p className='head-text'>Phone: </p> +91 80868 68911</p>
                <p className='reg-text'> <p className='head-text'>Email: </p>ieeesb@nitc.ac.in</p>
                </div>
                <div className="google-map">
                    <Link to={'https://goo.gl/maps/4s5nuuRAUPiXWvTs5'} className='crop'>
                        <img src={ map } alt='map-of nitc' className='mapimage'/>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default ContactsPage