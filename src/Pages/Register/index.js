import React from 'react';
import './index.css';
import back from '../../Assets/images/back.png';
import home from '../../Assets/images/padlock.png';
import circle1 from '../../Assets/images/New folder/Group 428.png';
import circle2 from '../../Assets/images/New folder/Group 427.png';
import circle3 from '../../Assets/images/New folder/Group 426.png';
import circle4 from '../../Assets/images/New folder/Group 429.png';
import circle5 from '../../Assets/images/New folder/Group 430.png';
import circleHover1 from '../../Assets/images/New folder/Component 31 – 8.png';
import circleHover2 from '../../Assets/images/New folder/Component 31 – 12.png';
import circleHover3 from '../../Assets/images/New folder/Component 31 – 10.png';
import circleHover4 from '../../Assets/images/New folder/Component 31 – 11.png';
import circleHover5 from '../../Assets/images/New folder/Component 31 – 9.png';
import mask from '../../Assets/images/Mask.png';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register_'> 
        <header>
          <Link to="/login" className='m-2'>
            <span>Back</span>
            <img src={back} alt=""/>
          </Link>
          <Link to="/" className='m-2'>
            <span>Home</span>
            <img src={home} alt=""/>
          </Link>
        </header>
        <section className='formRegister'>
          <div className='forms'>
            <div className="first">
              <Link to="/register-coporate" className='me-3'>
                  <img src={circle1} alt="" width="220px" className='_circle'/>
                  <img src={circleHover1} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
            <div className="second">
              <Link to="/register-institute" className='ms-3'>
                  <img src={circle2} alt="" width="220px" className='_circle'/>
                  <img src={circleHover2} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
            <div className="three">
              <Link to="/register-scientific">
                  <img src={circle3} alt="" width="220px" className='_circle'/>
                  <img src={circleHover3} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
            <div className="four">
              <Link to="/register-handicraft" style={{position:"relative" , right:"14px"}}>
                  <img src={circle5} alt="" width="220px" className='_circle'/>
                  <img src={circleHover4} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
            <div className="fife"> 
              <Link to="/register-individuals" style={{position:"relative" , left:"14px"}}>
                  <img src={circle4} alt="" width="220px" className='_circle'/>
                  <img src={circleHover5} alt="" width="220px" className='_circlehover'/>
              </Link>
            </div>
          </div>
        </section>
        <div className='backgroundRegister'>
            <img src={mask} alt=""/>
        </div>
    </div>
  )
}

export default Register
