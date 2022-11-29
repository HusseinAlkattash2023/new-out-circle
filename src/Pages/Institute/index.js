import React from 'react'
import Circle from '../../Components/Circle/Circle'
import './index.css'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import logout from '../../Assets/images/logout.png'
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png'
import image1 from '../../Assets/images/New folder/Group 427.png';
import image2 from '../../Assets/images/New folder/Component 31 – 12.png'
function Institute() {

  return (
    <div className='institute'>
            <Link to="/" className="back">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        <Circle
        circle1={image1}
        circle2={image2}
        demand1="institute/service1"
        demand2="institute/service2"
        demand3="institute/service3"
        demand4="institute/service4"
        demand5="institute/service5"
        demand6="institute/service6"
        demand7="institute/service7"
        demand8="institute/service8"
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