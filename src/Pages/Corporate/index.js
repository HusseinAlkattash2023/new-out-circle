import Circle from '../../Components/Circle/Circle'
import './index'
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import image1 from '../../Assets/images/New folder/Group 428.png';
import image2 from '../../Assets/images/New folder/Component 31 – 8.png';
import logout from '../../Assets/images/logout.png';
import notifications from '../../Assets/images/notification.png';
import profile from '../../Assets/images/profile.png';

import './index.css'
function Croporate() {
    const ClearLocalStorate = ()=>{
        localStorage.clear();
    }
    const state = localStorage.getItem("users")
  return (
    <div className='croporate'>
        {
                    !state ? (
                    <header className='header2'>
                    <Link to="/">
                        <span>Back</span>
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                        <header className='header1'>
                        <Link to="/profile_individual" className="my-2">
                            <span>Profile</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications" className="my-2">
                            <span>Notifications</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link onClick={ClearLocalStorate} to="/" className="my-2">
                            <span>Logout</span>
                            <img src={logout} alt=""/>
                        </Link>
                    </header>
                    )
                }
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