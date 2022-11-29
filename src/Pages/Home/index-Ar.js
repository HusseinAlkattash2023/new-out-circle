import React , {useState} from 'react';
import whatsapp from '../../Assets/images/whatsapp.png';
import facebook from '../../Assets/images/facebook.png'
import linkedin from '../../Assets/images/linkedin.png'
import telegram from '../../Assets/images/telegram.png';
import instegram from '../../Assets/images/instagram.png'
import appStore from '../../Assets/images/appStore.png'
import googlePlay from '../../Assets/images/googlePlay.png'
import {Link} from 'react-router-dom'
import icon1 from "../../Assets/images/icon1.png"
import icon2 from "../../Assets/images/icon2.png"
import icon3 from "../../Assets/images/icon3.png"
import logo from "../../Assets/images/Group 360.svg"
import user from "../../Assets/images/user.png"
import outcircle from '../../Assets/images/OUTCIRCLE.svg'
import es from '../../Assets/images/1667844570962.png'
import i1 from '../../Assets/images/serviceAr/Group 519.png'
import i2 from '../../Assets/images/serviceAr/Group 322.png'
import i3 from '../../Assets/images/serviceAr/Component 16 – 8.png'
import i4 from '../../Assets/images/serviceAr/Component 16 – 7.png'
import i5 from '../../Assets/images/serviceAr/Group 521.png'
import iui1 from '../../Assets/images/serviceAr/hover/Group 518.png'
import iui2 from '../../Assets/images/serviceAr/hover/Group 520.png'
import iui3 from '../../Assets/images/serviceAr/hover/Group 519.png'
import iui4 from '../../Assets/images/serviceAr/hover/Group 521.png'
import iui5 from '../../Assets/images/serviceAr/hover/Group 522.png'
import { useNavigate } from 'react-router-dom';
import './index.css'
import image from '../../Assets/images/Group 287.png'
function HomeAr() {


  const navigate =  useNavigate()
  const OnClick = ()=>{
    navigate("/login")
  }
  return (
    <div className='home'>
      <img className='img2_ar' src={es} alt=""/>
      <header className='_header1'>
      <button className="Ar_" style={{borderRadius:"20px 0px 0px 20px" , width:"40px" , border:"2px solid #000"}} onClick={() => navigate("/ar")}>Ar</button>
      <button className="En_" style={{borderRadius:"0px 20px 20px 0px" , width:"40px" , border:"2px solid #000"}} onClick={() => navigate("/")}>En</button>
      </header>
      <header className='_header2_ar'></header>
      <Link to="/news">
          <marquee className="marquee_ar" direction="right">نحن فريق يقدم خدمات استشارية وتطويرية ، بالإضافة إلى الخدمات المهنية لجميع قطاعات الأعمال الخاصة في معظم محافظات سوريا بطريقة فنية غير عادية توفر الوقت والجهد على الجميع.</marquee>
      </Link>
      <div>
      <div className='login1_ar'>
      <Link to="/login-ar" className='mx-1' style={{display:"flex" , alignItems:"center"}}>
            <div style={{border:"2px solid black" , color:"black"}}>تسجيل الدخول</div> 
            <img src={user} alt="" width="36px" style={{background:"#DCECDD" , borderRadius:"50%"}}/>
      </Link>
      </div> 
      <div className='main_ar'>
        <img className='outcircle' src={outcircle} alt="" width="154"/>
        <div className='cards'>
            <Link to="/individuals-ar" className='hov' onClick={OnClick}>
                <img className='img_ mx-3' src={i5} alt=""/>
                <img className='iui' src={iui5} alt=""/>
            </Link>
            <Link to="/handicraft-ar" className='hov'>
                <img className='img_ mx-3'  src={i4} alt=""/>
                <img className='iu' src={iui4} alt=""/>
            </Link>
            <Link to="/scientific-ar" className='hov'>
                <img className='img_ mx-3'  src={i3} alt=""/>
                <img className='iu' src={iui3} alt=""/>
            </Link>
            <Link to="/institute-ar" className='hov'>
                <img  className='img_ mx-3'  src={i2} alt=""/>
                <img  className='iu'  src={iui2} alt=""/>
            </Link>
            <Link to="/corporate-ar" className='hov'>
                <img className='img_ mx-3'  src={i1} alt=""/>
                <img className='iu'  src={iui1} alt=""/>
            </Link>
        </div>
        </div>
        </div>
        <div className='sidebar_ar'>
          <Link to="/" className='logo'>
              <img src={logo} alt=""/>
          </Link>
          <nav className='navbar_'>
          <Link to="/whyus-ar" className='my-4 icon1'>
              <img src={icon1} alt="" width="60px"/> 
              <span>من نحن</span>
          </Link>
          <Link to="/goals-ar" className='my-4 icon2'>
              <img src={icon2} alt="" width="60px"/> 
              <span>أهدافنا و مميزاتنا</span>
          </Link>
          <Link to="/contactus-ar" className='my-4 icon3'>
              <img src={icon3} alt="" width="60px"/> 
              <span>أتصل بنا</span>
          </Link>
          </nav>
        </div>  
        <footer className="footer_ar">
        <Link to="/ads">
          <div className="put-ads">
            <img src={image} alt=""/>
          </div>
        </Link>
        <div className='icons_ar'>
            <ul>
                <li className='mx-0'>
                <Link to="">
                    <img src={instegram} alt=""/>
                </Link>
                </li>
                <li className='mx-0'>
                <Link to="">
                    <img src={whatsapp} alt=""/>
                </Link>
                </li>
                <li className='mx-0'>
                <Link to="">
                  <img src={facebook} alt=""/>
                </Link>
              </li>
              <li className='mx-0'>
                <Link to="">
                  <img src={linkedin} alt=""/>
                </Link>
              </li>
              <li className='mx-0'>
                <Link to="">
                  <img src={telegram} alt=""/>
                </Link>
              </li>
            </ul>
            <div className='ms-4'>
            <Link to="" className='me-1'>
              <img src={googlePlay} alt=""/>
            </Link>
            <Link to="" className='ms-1'>
              <img src={appStore} alt=""/>
            </Link>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default HomeAr