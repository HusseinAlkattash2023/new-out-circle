import React from 'react'
import Circle from '../../Components/Circle/Circle'
import './index'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import image1 from '../../Assets/images/New folder/Group 428.png'
import image2 from '../../Assets/images/New folder/Component 31 – 8.png'
import './index.css'
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
        circle1={image1}
        circle2={image2}
        demand1="corporate/service1"
        demand2="corporate/service2"
        demand3="corporate/service3"
        demand4="corporate/service4"
        demand5="corporate/service5"
        demand6="corporate/service6"
        demand7="corporate/service7"
        demand8="corporate/service8"
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