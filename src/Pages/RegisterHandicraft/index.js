import React from 'react'
import './RegisterHandicraft.css'
import FormInput from '../../component/Input/FormInput'
import handicraft from '../../images/Mask Group -3.png'
function RegisterScientific({setHandicraft_}) {

    return (
        <div className='scientific'>
            <FormInput text="Handicraft" setShow={setHandicraft_} route={"handicraft"}/>
        <div className='background2'>
            <img src={handicraft} alt=""/>
        </div>
        </div>
)
}

export default RegisterScientific