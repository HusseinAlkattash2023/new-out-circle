import React from 'react'
import Circle from '../../component/Circle/Circle'
import './PersonalServices.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
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
        demand1="personalservice/service_1"
        demand2="personalservice/service_2"
        demand3="personalservice/service_3"
        demand4="personalservice/service_4"
        demand5="personalservice/service_5"
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