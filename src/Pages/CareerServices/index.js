import React from 'react'
import Circle from '../../component/Circle/Circle'
import './CareerServices.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png';
function CareerServices() {
  return (
    <div className='careerServices'>
        <header>
            <Link to="/individuals">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        demand1="careerservice/service_1"
        demand2="careerservice/service_2"
        demand3="careerservice/service_3"
        demand4="careerservice/service_4"
        demand5="careerservice/service_5"
        demand6="careerservice/service_6"
        service="Individuals"
        service1="Finding appropriate development courses"
        service2="Providing a job opportunity"
        service3="Consulting in current work"
        service4="New businees advice and ideas"
        service5="(Real estate, transportation, financial, commercial registry, general construction ...ect) services"
        service6="Advertising Services"
        />
        <span className='career'>Career services</span>
    </div>
  )
}

export default CareerServices
