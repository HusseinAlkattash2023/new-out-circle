import React from 'react'
import logo from '../../images/Group 360.svg'
import back from '../../images/back.png'
import {Link} from 'react-router-dom'
import whyus from '../../images/Group 384.png'
import './WhyUs.css'
function WhyUs() {
    return (
        <div className='whyus'>
            <div className="logo">
                <Link className='my-3' to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
                <div className='back'>
                    <Link to="/" className='m-2'>
                        <span>Back</span>
                        <img src={back} alt=""/>
                    </Link>
                </div>
            <img className="background" src={whyus} alt=""/>
            <section className='main'>
                <div>
                    <h2>Why us</h2>
                </div>
                <div className='text'>
                    <p>Under natural conditions, Success is not considered as a real success or even skill...<br/>
                    while despair under difficult circumstances is evidence of disability...</p>
                    <p>Real Success, skills and experience appear only in difficult times and under hard circumstances...</p>
                    <p>Real success is to find something from nothing</p>
                    <p>We are a team that provides consultative and development services in addition to occupational services for all private business sectors in most of the
                        governorates of syria in an out-of-the-ordinary technical way that saves time and efforts for every one.
                        it also gives valuable and actual results, in addition to challenges in the labor market outside the public 
                        cilcle and the usual routine.
                    </p>
                    <p>To know more details and benefit from our services, please sign in individually according to the field of work.</p>
                    <p>Very important notes:</p>
                    <p>-Our main field of work the consulting ones with the possibility of applying them to become occupational services according of the agreement</p>
                    <p>-The occupational and personal services that we provide do not nacessarily have to met because our services need an organized and accurate study to be accepted, 
                        so please you have to give us enough time to avoid any problems.
                    </p>
                    <p>
                        -In the event of not being able to meet any request, an official apology will be made
                        within a short period.
                    </p>
                </div>
            </section>
        </div>
)
}

export default WhyUs
