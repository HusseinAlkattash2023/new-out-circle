import React from 'react';
import './index.css';
import logo from '../../Assets/images/Group 360.svg'
import back from '../../Assets/images/back.png'
import contact from '../../Assets/images/contact.png'
import {Link} from 'react-router-dom'
import facebook from "../../Assets/images/facebook.png";
import telegram from '../../Assets/images/telegram.png';
import whatsapp from '../../Assets/images/whatsapp.png';
import Linkedin from '../../Assets/images/linkedin.png';
import instegram from '../../Assets/images/instagram.png'
import appStore from '../../Assets/images/appStore.png';
import googlePlay from '../../Assets/images/googlePlay.png';

function ContactUs() {
    return (
        <div className='contact'>
                <div className="logo_ar">
                <Link className='my-3' to="/ar">
                    <img src={logo} alt=""/>
                </Link>
                </div>
                <div className='back_ar'>
                    <Link to="/ar" className='m-2'>
                        <span>رجوع</span>
                        <img src={back} alt=""/>
                    </Link>
                </div>
            <img className="background" src={contact} alt=""/>
            <div className="rectangle"></div>
            <section className='main'>
                <div>
                    <h2 style={{fontFamily:"changa"}}>اتصل بنا</h2>
                </div>
                <div className='text'>
                    <ul>
                        <li>Website:</li>
                        <li>Email:</li>
                        <li>Mobile 1:</li>
                        <li>Mobile 2:</li>
                        <li>WhatsApp / Telegram:</li>
                    </ul>
                    <p>----------------------------</p>
                    <ul>
                        <li>General Manager:<br/><span className="jareer">Jareer Sayed Ahmad</span></li>
                        <li>Mobile:</li>
                        <li>WhatsApp:</li>
                        <li>Email:</li>
                    </ul>
                </div>
            </section>
            <footer>
            <div className='icons_ar'>
        <ul>
            <li className='mx-0'>
              <Link to="">
                <img src={whatsapp} alt="" />
              </Link>
            </li>
            <li className='mx-0'>
              <Link to="">
                <img src={facebook} alt="" />
              </Link>
            </li>
            <li className='mx-0'>
              <Link to="">
                <img src={Linkedin} alt="" />
              </Link>
            </li>
            <li className='mx-0'>
              <Link to="">
                <img src={telegram} alt="" />
              </Link>
            </li>
            <li className='mx-0'>
            <Link to="">
                <img src={instegram} alt="" />
            </Link>
            </li>
        </ul>
        <div className='ms-4'>
            <Link to="" className='me-1'>
                <img src={googlePlay} alt="" />
            </Link>
            <Link to="" className='ms-1'>
                <img src={appStore} alt="" />
            </Link>
        </div>
        </div>
            </footer>
        </div>
)
}

export default ContactUs