import React from 'react'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import circle from '../../images/New folder/Group 429.png'
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png'
import './Individuals.css'
function Individuals({individual_ , setIndividual_}) {
    const ClearLocalStorate = ()=>{
        localStorage.clear();
    }
    return (
        <div className='individuals'>
                {
                    individual_ ? (
                    <header className='header2'>
                    <Link to="/">
                        <span>Back</span>
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                        <header className='header1'>
                        <Link to="/profile_individual">
                            <span>Profile</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications">
                            <span>Notifications</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link onClick={ClearLocalStorate} to="/">
                            <span>Logout</span>
                            <img src={logout} alt=""/>
                        </Link>
                    </header>
                    )
                }
            <div className='individual'>
                <img src={circle} alt="" width="260px"/>
            </div>
            <div className='services'>
                <Link to="/careerservice" className='career'>
                    <p>Career services</p>
                </Link>
                <Link to="/personalservices" className='personal'>
                    <p>Personal services</p>
                </Link>
            </div>
        </div>
)
}

export default Individuals
