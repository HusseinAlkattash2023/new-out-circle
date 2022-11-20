import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowReturnLeft} from "react-icons/bs"
import user from '../../images/user.png'
import update from '../../images/update.png'
import file from '../../images/file.png'
import individuals from '../../images/Mask Group -5.png'

import './ProfileIndividual.css' 
const ProfileIndividual = ({value}) => {
    return (
    <div className='profile'>
        <header>
            <Link to="/userpage">
                <button><BsArrowReturnLeft/></button>
            </Link>
        </header>
        <section>
        <header>
                <span className='icon'><img src={user} alt="" width="40px"/></span>
                <span className='text'>Your Profile</span>
        </header>
        <div className='body my-3'>
            <div style={{height:"350px" , overflowY:"scroll"}}>
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
                    <input type="text" defaultValue={value || "Current city"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Current address"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Scientific certificate"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Detials of the academic certificate"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
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
                <div className='information'>
                    <input type="text" defaultValue={value || "Current work"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Work address"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Work start date"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="number" defaultValue={value || "Work phone number"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Extention"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Detials practical experience"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <input type="text" defaultValue={value || "Language skills"}/>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <p>Upload file</p>
                    <div>
                        <img src={file} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <p>Upload file</p>
                    <div>
                        <img src={file} alt=""/>
                    </div>
                </div>
            </div>
            <div className='footer'>
            <Link to="">
                <button className='mt-4 py-1 px-3'>Update</button>
            </Link>
            </div>
        </div>
        </section>
        <div className='section2'>
            <img src={individuals} alt=""/>
        </div>
    </div>
)
}

export default ProfileIndividual
