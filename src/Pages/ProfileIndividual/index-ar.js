import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowReturnLeft} from "react-icons/bs"
import user from '../../Assets/images/user.png'
import update from '../../Assets/images/update.png'
import file from '../../Assets/images/file.png'
import individuals from '../../Assets/images/ar_photo/Mask Group -6.png';
import './index.css';
import back from "../../Assets/images/back.png";

const ProfileIndividual = ({value}) => {
    return (
    <div className='profile'>
        <header>
        <Link to="/individuals" className="back_ar">
            <span>رجوع</span>
            <img src={back} alt="" />
        </Link>
        </header>
        <section className="section1-ar">
        <header>
                <span className='icon'><img src={user} alt="" width="40px"/></span>
                <span className='text'>ملفك الشخصي</span>
        </header>
        <div className='body my-3'>
            <div style={{height:"350px" , overflowY:"scroll"}}>
                <div className='information'>
                    <input type="text" value="اسم المستخدم"/>
                </div>
                <div className='information'>
                    <Link to="/change-password-ar">
                        <img src={update} alt=""/>
                    </Link>
                    <input type="password" value={"**********"}/>
                </div>
                <div className='information'>
                    <input type="text" value="الاسم الكامل"/>
                </div>
                <div className='information'>
                    <input type="text" value="المواليد"/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "اتمحافظة"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "العنوان الحالي"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "الشهادة العلمية"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "تفاصيل الشهادة العلمية"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "رقم الموبايل"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "رقم الواتس أب"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="email" defaultValue={value || "البريد الألكتروني"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "العمل الحالي"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "عنوان العمل"}/>
                    
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "تاريخ بدء العمل"}/>
                    
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="number" defaultValue={value || "رقم هاتف العمل"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="number" defaultValue={value || "التحويلة"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "تفاصيل الخبرات العملية"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "المهارات اللغوية"}/>
                </div>
                <div className='information'>
                    <div>
                        <img src={update} alt=""/>
                    </div>
                    <input type="text" defaultValue={value || "المهارات التقنية"}/>
                </div>
                <div className='information'>
                    <p>تحميل الشهادة العلمية الأخيرة</p>
                    <div>
                        <img src={file} alt=""/>
                    </div>
                </div>
                <div className='information'>
                    <p>تحميل شهادات أخرى أو دورات تدريبية</p>
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
        <div className='section2-ar'>
            <img src={individuals} alt=""/>
        </div>
    </div>
)
}

export default ProfileIndividual;