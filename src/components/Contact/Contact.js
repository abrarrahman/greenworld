import React from 'react';
import './Contact.css';
import Map from './Map';
import ContactForm from './ContactForm';

const Contact = () => {
    return(
        <div className='w-80 center'>
            <Map/>
            <div className='w-50'>
                <p className='f4 mt4'>Leave us a message and let us get back to you</p>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact;