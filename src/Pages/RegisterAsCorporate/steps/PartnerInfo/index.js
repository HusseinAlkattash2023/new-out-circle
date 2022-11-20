import React from 'react'

const PartnerInfo = () => {
  return (
    <div>
        <h3 className='my-2' style={{color:"#fff" , borderBottom:"2px solid #fff"}}>Partner(1) Information</h3>
        <FormInput/>
        <h3 className='mt-4' style={{color:"#fff" , borderBottom:"2px solid #fff"}}>Partner(2) Information</h3>
        <FormInput/>
        <h3 className='mt-4' style={{color:"#fff" , borderBottom:"2px solid #fff"}}>Partner(3) Information</h3>
        <FormInput/>
    </div>
  )
}

const FormInput = ()=>{
  return (
    <div>
    <div className='my-3 input_'>
    <input
    type="text"
    name="companyName"
    placeholder="Partner's full name"
    />
    <p></p>
  </div>
  <div className='my-3 input_'>
    <input
    type="text"
    name="companyName"
    placeholder="Born date"
    />
    <p></p>
  </div>
  <div className='my-3 input_'>
    <input
    type="number"
    name="companyName"
    placeholder="Personal mobile number"
    />
    <p></p>
  </div>
  <div className='my-3 input_'>
    <input
    type="text"
    name="companyName"
    placeholder="Landline extention"
    />
    <p></p>
  </div>
  <div className='my-3 input_'>
    <input
    type="email"
    name="companyName"
    placeholder="Personal email address"
    />
    <p></p>
  </div>
  <div className='my-3 input_'>
    <input
    type="text"
    name="companyName"
    placeholder="Participation rate"
    />
    <p></p>
  </div>
    </div>
  )
}

export default PartnerInfo
