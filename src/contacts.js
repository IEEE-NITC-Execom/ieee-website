import './contacts.css'
import React from 'react'
import { ActiveContext } from './activecontext'
import { useContext } from 'react'

const ContactsPage = () => {
    
    const { setActiveItem } = useContext(ActiveContext);
    setActiveItem(4);

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
                <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3912.186659586225!2d75.9310067!3d11.3210634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642fd50000001%3A0xbe8a77db953bda6c!2sNational%20Institute%20of%20Technology%2C%20Calicut!5e0!3m2!1sen!2sin!4v1688997542079!5m2!1sen!2sin"
                        width="600"
                        title='maps-nitc'
                        className='maps-frame'
                    height="450"
                    style={{border:"0"}}
                    >
                </iframe>
        </div>
            </div>
        </div>
    )
}

export default ContactsPage