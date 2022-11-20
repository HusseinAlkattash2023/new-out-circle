import React from 'react'
import Circle from '../../component/Circle/Circle'
import './Croporate.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import image from '../../images/New folder/Group 428.png'
function Croporate() {
  return (
    <div className='croporate'>
        <header>
            <Link to="/" className="back">
                <span>Back</span>   
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        demand1="corporate/service_1"
        demand2="corporate/service_2"
        demand3="corporate/service_3"
        demand4="corporate/service_4"
        demand5="corporate/service_5"
        demand6="corporate/service_6"
        demand7="corporate/service_7"
        demand8="corporate/service_8"
        service="Croporate"
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

export default Croporate;