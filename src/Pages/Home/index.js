import React, { useState } from 'react';
import whatsapp from '../../Assets/images/whatsapp.png';
import facebook from '../../Assets/images/facebook.png';
import linkedin from '../../Assets/images/linkedin.png';
import telegram from '../../Assets/images/telegram.png';
import instegram from '../../Assets/images/instagram.png';
import appStore from '../../Assets/images/appStore.png';
import googlePlay from '../../Assets/images/googlePlay.png';
import { Link } from 'react-router-dom';
import icon1 from "../../Assets/images/icon1.png";
import icon2 from "../../Assets/images/icon2.png";
import icon3 from "../../Assets/images/icon3.png";
import logo from "../../Assets/images/Group 360.svg";
import user from "../../Assets/images/user.png";
import outcircle from '../../Assets/images/OUTCIRCLE.svg';
import es from '../../Assets/images/1667844570962.png';
import i1 from '../../Assets/images/Component 16 – 5.png';
import i2 from '../../Assets/images/Component 16 – 4.png';
import i3 from '../../Assets/images/Component 16 – 3.png';
import i4 from '../../Assets/images/Component 16 – 2.png';
import i5 from '../../Assets/images/Component 16 – 1.png';
import iui1 from '../../Assets/images/hover/16.png';
import iui2 from '../../Assets/images/hover/20.png';
import iui3 from '../../Assets/images/hover/19.png';
import iui4 from '../../Assets/images/hover/18.png';
import iui5 from '../../Assets/images/hover/17.png';
import { useNavigate } from 'react-router-dom';
import './index.css'
import image from '../../Assets/images/ads_spa.png';
function Home({ pageTitle }) {

  const navigate = useNavigate()
  const OnClick = () => {
    navigate("/login")
  }

  return (
    <div className='home'>
      <img className='img2' src={es} alt="" />
      <header className='_header1'>
        <button className="Ar" style={{borderRadius:"20px 0px 0px 20px" , width:"40px" , border:"2px solid #000"}} onClick={()=> navigate("/ar")}>Ar</button>
        <button className="En" style={{borderRadius:"0px 20px 20px 0px" , width:"40px" , border:"2px solid #000"}} onClick={()=> navigate("/")}>En</button>
      </header>
      <header className='_header2'></header>
      <Link to="/news">
        <marquee direction="left">We are a team that provides consultative and development services , in addition to occupational services for all private business sectors in most of the governorates of syria in an out-of-the-ordinary technical way that saves time and efforts for every one.</marquee>
      </Link>
      <div>
        <div className='login1'>
          <Link to="/login" className='mx-1' style={{ display: "flex", alignItems: "center" }}>
            <div style={{ border: "2px solid black", color: "black" }}>Login</div>
            <img src={user} alt="" width="36px" style={{ background: "#DCECDD", borderRadius: "50%" }} />
          </Link>
        </div>
        <div className='main'>
          <img className='outcircle' src={outcircle} alt="" width="154" />
          <div className='cards'>
            <Link to="/corporate" className='hov' onClick={OnClick}>
              <img className='img_ mx-3' src={i1} alt="" />
              <img className='iui' src={iui1} alt="" />
            </Link>
            <Link to="/institute" className='hov'>
              <img className='img_ mx-3' src={i2} alt="" />
              <img className='iui' src={iui2} alt="" />
            </Link>
            <Link to="/scientific" className='hov'>
              <img className='img_ mx-3' src={i3} alt="" />
              <img className='iui' src={iui3} alt="" />
            </Link>
            <Link to="/handicraft" className='hov'>
              <img className='img_ mx-3' src={i4} alt="" />
              <img className='iui' src={iui4} alt="" />
            </Link>
            <Link to="/individuals" className='hov'>
              <img className='img_ mx-3' src={i5} alt="" />
              <img className='iu' src={iui5} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className='sidebar'>
        <Link to="/" className='logo'>
          <img src={logo} alt="" />
        </Link>
        <nav className='navbar_'>
          <Link to="/why-us" className='my-4 icon1'>
            <img src={icon1} alt="" width="60px" />
            <span>Why us</span>
          </Link>
          <Link to="/goals" className='my-4 icon2'>
            <img src={icon2} alt="" width="60px" />
            <span>Goals&<br />Advanteges</span>
          </Link>
          <Link to="/contact-us" className='my-4 icon3'>
            <img src={icon3} alt="" width="60px" />
            <span>Contact us</span>
          </Link>
        </nav>
      </div>
      <footer>
        <Link to="/ads">
          <img src={image} alt="" className="ads_space"/>
        </Link>
        <div className='icons'>
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
                <img src={linkedin} alt="" />
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

export default Home
