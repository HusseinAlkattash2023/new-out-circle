import React from 'react';
import './ContactUs.css';
import logo from '../../images/Group 360.svg'
import back from '../../images/back.png'
import contact from '../../images/contact.png'
import {Link} from 'react-router-dom'
import facebook from "../../images/facebook.png";
import telegram from '../../images/telegram.png';
import whatsapp from '../../images/whatsapp.png';
import Linkedin from '../../images/linkedin.png';
function ContactUs() {
    return (
        <div className='contact'>
                <div className='logo my-3'>
                    <img src={logo} alt=""/>
                </div>
                <div className='back'>
                    <Link to="/" className='m-2'>
                        <span>Back</span>
                        <img src={back} alt=""/>
                    </Link>
                </div>
            <img className="background" src={contact} alt=""/>
            <section className='main'>
                <div>
                    <h2>Countact us</h2>
                </div>
                <div className='text'>
                    <ul>
                        <li>Website:</li>
                        <li>Email:</li>
                        <li>Mobile 1:</li>
                        <li>Mobile 2:</li>
                        <li>WhatsApp / Telegram:</li>
                        <li>Facebook:</li>
                        <li>Linkedin:</li>
                    </ul>
                    <p>----------------------------</p>
                    <ul>
                        <li>General Manager: Jareer Sayed Ahmad</li>
                        <li>Mobile:</li>
                        <li>WhatsApp:</li>
                        <li>Email:</li>
                    </ul>
                </div>
            </section>
            <footer>
            <ul>
                <li className='mx-2'>
                    <Link to="">
                        <img src={whatsapp} alt=""/>
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link to="">
                        <img src={facebook} alt=""/>
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link to="">
                        <img src={Linkedin} alt=""/>
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link to="">
                        <img src={telegram} alt=""/> 
                    </Link>
                </li>
            </ul>
            </footer>
        </div>
)
}

export default ContactUs
