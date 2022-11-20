import React from 'react'
import Circle from '../../component/Circle/Circle'
import './Scietific.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png';
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png'
function Scietific({sceintific_}) {
    
    const ClearLocalStorate = ()=>{
        localStorage.clear();
    }
  return (
    <div className='scientific_'>
        {
                    sceintific_ ? (
                    <header className='header2'>
                    <Link to="/">
                        <span>Back</span>
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                    <header className='header1'>
                        <Link to="/profile_scientific">
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
        demand1="scientific/service_1"
        demand2="scientific/service_2"
        demand3="scientific/service_3"
        demand4="scientific/service_4"
        demand5="scientific/service_5"
        demand6="scientific/service_6"
        demand7="scientific/service_7"
        demand8="scientific/service_8"
        service="Professional Scientific"
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

export default Scietific;