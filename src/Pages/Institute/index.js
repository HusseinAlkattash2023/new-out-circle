import React from 'react'
import Circle from '../../component/Circle/Circle'
import './Institute.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png'

function Institute() {

  return (
    <div className='institute'>
            <Link to="/" className="back">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        <Circle 
        demand1="institute/service_1"
        demand2="institute/service_2"
        demand3="institute/service_3"
        demand4="institute/service_4"
        demand5="institute/service_5"
        demand6="institute/service_6"
        demand7="institute/service_7"
        demand8="institute/service_8"
        service="Institute"
        service1="Consultations and ideas in the current work in all areas of banking/financial/marketing ..ect"
        service2="New business advice and ideas."
        service3="Account management (financial and banking/social media... ect)."
        service4="Follow-up  services for the investment activities."
        service5="(Real estate, transpotation, financial, licenses ..ect) services."
        service6="Cladding and decoration ideas and services for the company."
        service7="Providing qualified employees."
        service8="Advertising Services."
        />
    </div>
  )
}

export default Institute