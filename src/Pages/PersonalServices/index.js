import React from 'react'
import Circle from '../../Components/Circle/Circle'
import './index.css'
import {Link} from 'react-router-dom'
import back from '../../Assets/images/back.png'
import image1 from '../../Assets/images/New folder/Group 429.png'
import image2 from '../../Assets/images/New folder/Component 31 – 9.png'
function PersonalServices() {
  return (
    <div className='personalServices'>
        <header>
            <Link to="/individuals">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        circle1={image1}
        circle2={image2}
        demand1="personal-services/service1"
        demand2="personal-services/service2"
        demand3="personal-services/service3"
        demand4="personal-services/service4"
        demand5="personal-services/service5"
        service="Individuals"
        service1="Medical services"
        service2="Consultations on issues and general problems"
        service3="Git and occasions services"
        service4="Travel and reservation services"
        service5="Maintenance Services"
        />
        <span className='personal'>Personal services</span>
    </div>
  )
}

export default PersonalServices