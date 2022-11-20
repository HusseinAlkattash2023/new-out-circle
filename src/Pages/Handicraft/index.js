import React from 'react'
import Circle from '../../component/Circle/Circle'
import './Handicraft.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png'
import image from '../../images/New folder/Group 430.png'
function Handicraft({handicraft_}) {
  const ClearLocalStorate = ()=>{
    localStorage.clear();
}
  return (
    <div className='handicraft'>
        {
                    handicraft_ ? (
                    <header className='header2'>
                    <Link to="/">
                        <span>Back</span>
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                        <header className='header1'>
                        <Link to="/profile_handicraft">
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
        <Circle 
        circle={image}
        demand1="handicraft/service_1"
        demand2="handicraft/service_2"
        demand3="handicraft/service_3"
        demand4="handicraft/service_4"
        demand5="handicraft/service_5"
        demand6="handicraft/service_6"
        demand7="handicraft/service_7"
        demand8="handicraft/service_8"
        service="Handicraft"
        service1="Consultations and ideas in the current work in all areas of banking/financial/marketing ..ect"
        service2="New business advice and ideas"
        service3="Account management (financial and banking/social media... ect)"
        service4="Follow-up  services for the investment activities"
        service5="(Real estate, transpotation, financial, licenses ..ect) services"
        service6="Cladding and decoration ideas and services for the company."
        service7="Providing qualified employees."
        service8="Advertising Services."
        />
    </div>
  )
}

export default Handicraft;