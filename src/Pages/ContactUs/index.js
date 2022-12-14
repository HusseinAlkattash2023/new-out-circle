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
            <div className="rectangle"></div>
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
            <div className='icons'>
            <ul>
            <li className="mx-0">
              <a href="https://wa.me/+963946202311" target="_blank">
                <img src={whatsapp} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="https://m.facebook.com/profile.php?id=100088302496274&mibextid=ZbWKwL" target="_blank">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="" target="_blank">
                <img src={Linkedin} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="http://t.me/OutCircle" target="_blank">
                <img src={telegram} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="" target="_blank">
                <img src={instegram} alt="" />
              </a>
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
