import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import back from '../../Assets/images/back.png';
import corporate from '../../Assets/images/ar_photo/corporate.png';
import './index.css';
import {BsPersonPlus} from "react-icons/bs";

const AddPartnersAr = () => {
    const number_of_partners = localStorage.getItem("number_partners");
    return (
        <div className="add_parteners">
        <header>
            <Link to="/register" className="back_ar">
                <span>رجوع</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <section className="register_ar">
            <header>
                <span className='icon'><BsPersonPlus/></span>
                <span className='text'>إضافة الشركاء</span>
            </header>
            <form className="form-container">
            <div className="body">
            {(() => {
            const arr = [];
            for (let i = 1; i <= number_of_partners; i++) {
                arr.push(
                    <div>
                        <Partners num={i}/>
                    </div>
                );
            }
            return arr;
            })()}
            </div>
            <div className="footer">
                <button className="mt-3">Submit</button>
            </div>
            </form>
        </section>
        <div className='background2_ar'>
            <img src={corporate} alt=""/>
        </div>
        </div>
)
}

function Partners({num}){
    return(
    <div className="my-4">
    <h3 className='my-2 header' style={{color:"#fff" , borderBottom:"2px solid #fff"}}>({num})معلومات الشريك</h3>
    <div className='my-3 input_'>
        <input
        type="text"
        name="companyName"
        placeholder=""
        />
        <p></p>
    </div>
    <div className='my-3 input_'>
        <input
        type="text"
        name="companyName"
        placeholder=""
        />
        <p></p>
    </div>
    <div className='my-3 input_'>
        <input
        type="number"
        name="companyName"
        placeholder=""
        />
        <p></p>
    </div>
    <div className='my-3 input_'>
        <input
        type="text"
        name="companyName"
        placeholder=""
        />
        <p></p>
    </div>
    <div className='my-3 input_'>
        <input
        type="email"
        name="companyName"
        placeholder=""
        />
        <p></p>
    </div>
    <div className='my-3 input_'>
        <input
        type="text"
        name="companyName"
        placeholder=""
        />
        <p></p>
    </div>
    </div>
    )
}

export default AddPartnersAr;
