import React from 'react';
import Circle from '../../Components/Circle/Circle_ar';
import './index.css';
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import image from '../../Assets/images/Component 31 – 28.png';
import image2 from '../../Assets/images/hover_ar/Component 31 – 28.png'
function PersonalServices_ar() {
  return (
    <div className='personalServices'>
        <header>
            <Link to="/individuals">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        circle={image}
        circle2={image2}
        demand1="personal-service/service1-ar"
        demand2="personal-service/service2-ar"
        demand3="personal-service/service3-ar"
        demand4="personal-service/service4-ar"
        demand5="personal-service/service5-ar"
        service1="خدمات طبية"
        service2="استشارات حول القضايا والمشاكل العامة"
        service3="خدمات المناسبات والهدايا"
        service4="خدمات السفر والجوازات"
        service5="خدمات الصيانة"
        />
        <span className='personal_ar'>خدمات شخصية</span>
    </div>
  )
}

export default PersonalServices_ar;