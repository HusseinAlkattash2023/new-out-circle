import React from 'react'
import './Visiter.css'
import { Link } from 'react-router-dom'
import back from '../../images/back.png';
import image from '../../images/Mask Group -1.png'
import {BsPersonPlus} from "react-icons/bs"
const Visiter = ({type}) => {
  return (
    <div className='visiter'>
        <Link to="/demand" className='back'>
            <span>Back</span>
            <img src={back} alt=""/>
        </Link>
        <div className='section1'>
            <header>
                <span className='icon'><BsPersonPlus/></span>
                <span className='text'>Visitor/{type}</span>
            </header>
            <div className='body'>
                <div>
                <input className='my-2' type="email" placeholder='E-mail address'/>
                </div>
                <span>or</span>
                <div>
                    <input className='my-2' type="number" placeholder='mobile number'/>
                </div>
                <span>or</span>
                <div>
                    <input className='my-2' type="number" placeholder='Whatsapp number'/>
                </div>
                <div>
                    <input className='my-4' type="file" placeholder='Uploade file'/>
                </div>
            </div>
            <div className='footer'>
                <button className='mt-3 btn btn-dark'>Register</button>
            </div>
        </div>
        <div className='section2'>
            <img src={image} alt=""/>
        </div>
    </div>
  )
}

export default Visiter
