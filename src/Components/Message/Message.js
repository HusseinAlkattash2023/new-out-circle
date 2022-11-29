import React from 'react'
import './Message.css';
import {Link} from 'react-router-dom'
import uploade from '../../Assets/images/Group 375.png'
import check from '../../Assets/images/check_box.png';
import back from '../../Assets/images/back.png'
import send_message from '../../Assets/images/sendMessage.png'
const Message = ({image , text}) => {
    return (
        <div className='message'>
            <Link to="/corporate" className='back'>
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
            <div className="section1">
                <div className="div1">
                    <p>{text}</p>
                </div>
                <div className='side'>
                    <img src={`${image}`} alt=""/>
                </div>
            </div>
            <div className='section2'>
                <form>
                    <textarea  placeholder='Write message here...'></textarea>
                    <div className='upload'>
                        <p>Upload file here for more detials</p>
                        <Link to="">
                            <img src={uploade} alt="" width="40px"/>
                        </Link>
                    </div>
                    <div>
                        <button>
                            <img src={send_message} alt=""/>
                        </button>
                    </div>
                </form>
                <Link to="/visitor">
                    <div className='check'>
                        <p>Information that must be complated first in case you are a visitor to send that request.</p>
                        <img src={check} alt="" width="40px"/>
                    </div>
                </Link>
                <div className='wages'>
                    Wages are determined after studying the request and 
                    before complation. In some services, a payment of wages is requesred as a downpayment.
                </div>
            </div>
        </div>
)
}

export default Message
