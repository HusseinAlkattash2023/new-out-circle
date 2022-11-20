import React from 'react'
import { Link } from 'react-router-dom'
import update from '../../../images/update.png'
const PersonalInfo = ({value}) => {
  return (
    <div>
        <div className='information'>
              <input type="text" value="User name"/>
        </div>
        <div className='information'>
            <input type="password" value={"**********"}/>
            <Link to="/change_password">
              <img src={update} alt=""/>
            </Link>
        </div>
        <div className='information'>
          <input type="text" value="Full name"/>
        </div>
        <div className='information'>
          <input type="text" value="Born date"/>
        </div>
        <div className='information'>
            <input type="text" defaultValue={value || "Mobile number"}/>
            <div>
                <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input type="text" defaultValue={value || "Whatsapp number"}/>
            <div>
                <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input type="email" defaultValue={value || "E-mail address"}/>
            <div>
              <img src={update} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo;
