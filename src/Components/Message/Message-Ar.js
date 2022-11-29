import React from 'react'
import './Message.css';
import {Link} from 'react-router-dom'
import uploade from '../../Assets/images/Group 375.png'
import check from '../../Assets/images/check_box.png';
import back from '../../Assets/images/back.png'
import send_message from '../../Assets/images/sendMessage.png'
const MessageAr = ({image , text}) => {
    return (
        <div className='message'>
            <Link to="/corporate-ar" className='back_ar'>
                <span>رجوع</span>
                <img src={back} alt=""/>
            </Link>
            <div className="section1">
                <div className="div1_ar">
                    <p>{text}</p>
                </div>
                <div className='side_ar'>
                    <img src={`${image}`} alt=""/>
                </div>
            </div>
            <div className='section2_ar'>
                <form>
                    <textarea  placeholder='...اكتب رسالتك هنا'></textarea>
                    <div className='upload'>
                    <Link to="">
                        <img src={uploade} alt="" width="40px"/>
                    </Link>
                    <p>تحميل الملف هنا لمزيد من التفاصيل</p>
                    </div>
                    <div>
                        <button>
                            <img src={send_message} alt=""/>
                        </button>
                    </div>
                </form>
                <Link to="/visitor">
                    <div className='check'>
                        <img src={check} alt="" width="30px"/>
                        <p>معلومات يجب استكمالها في حال كنت زائراً لإتمام إرسال الطلب</p>
                    </div>
                </Link>
                <div className='wages'>
                يتم تحديد الأجور بعد دراسة الطلب وقبل الجمع. في بعض الخدمات ، يتم إعادة دفع الأجور كدفعة مقدمة
                </div>
            </div>
        </div>
)
}

export default MessageAr;