import React from 'react'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import circle from '../../Assets/images/New folder/Group 429.png'
import logout from '../../Assets/images/logout.png'
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png';
import image2 from '../../Assets/images/New folder/Component 31 – 9.png';
import './index.css'
function Individuals() {
    const ClearLocalStorate = ()=>{
        localStorage.clear();
    }
    const state = localStorage.getItem("users")
    return (
        <div className='individuals'>
                {
                    !state ? (
                    <header className='header2'>
                    <Link to="/">
                        <span>Back</span>
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                        <header className='header1'>
                        <Link to="/profile_individual" className="my-2">
                            <span>Profile</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications" className="my-2">
                            <span>Notifications</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link onClick={ClearLocalStorate} to="/" className="my-2">
                            <span>Logout</span>
                            <img src={logout} alt=""/>
                        </Link>
                    </header>
                    )
                }
            <div className='individual'>
                <img src={circle} alt="" className="circle1"/>
                <img src={image2} alt="" className="circle2"/>
            </div>
            <div className='services'>
                <Link to="/career-services" className='career'>
                    <p>Career services</p>
                </Link>
                <Link to="/personal-services" className='personal'>
                    <p>Personal services</p>
                </Link>
            </div>
        </div>
)
}

export default Individuals
