import React from 'react'
import './RegisterScientific.css'
import FormInput from '../../component/Input/FormInput'
import scientific from '../../images/Mask Group -4.png'
function RegisterScientific({setSceintific_}) {

    return (
        <div className='scientific'>
            <FormInput text="Professional Scientific" setShow={setSceintific_} route={"scientific"}/>
        <div className='background1'>
            <img src={scientific} alt=""/>
        </div>
        </div>
)
}

export default RegisterScientific
