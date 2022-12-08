import React from 'react';
import './index.css';
import logo from '../../Assets/images/Group 360.svg'
import back from '../../Assets/images/back.png'
import contact from '../../Assets/images/contact.png'
import {Link} from 'react-router-dom'
import facebook from "../../Assets/images/facebook.png";
import telegram from '../../Assets/images/telegram.png';
import whatsapp from '../../Assets/images/whatsapp.png';
import linkedin from '../../Assets/images/linkedin.png';
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
            <div className="rectangle_ar"></div>
            <section className='main'>
                <div>
                    <h2 style={{fontFamily:"changa"}}>اتصل بنا</h2>
                </div>
                <div className='text_ar'>
                    <ul>
                        <li>:الموقع الإلكتروني</li>
                        <li>:البريد الإلكتروني</li>
                        <li>:رقم هاتف 1</li>
                        <li>:رقم هاتف 2</li>
                        <li>:واتس أب / تيليجرام</li>
                    </ul>
                    <p>----------------------------</p>
                    <ul>
                        <li>:المدير العام<br/><span className="jareer_ar">جرير سيد أحمد</span></li>
                        <li>:رقم الموبايل</li>
                        <li>:الواتس أب</li>
                        <li>:البريد الإلكتروني</li>
                    </ul>
                </div>
            </section>
        <footer className="footer">
        <div className='icons_ar'>
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
                <img src={linkedin} alt="" />
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
        <div className='ddd ms-2'>
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