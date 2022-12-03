import React ,{useRef} from 'react'
import { useForm} from 'react-hook-form'
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import file from '../../../../Assets/images/file.png';

const CompanyInfo = ({data , setData , setNum , num}) => {
  const { register , formState:{errors}} = useForm();
  const ref1 = useRef()
  return (
    <div>
      <form encType="multipart/form-data">
        <div className='my-3 input_'>
          <input
          type="text"
          name="companyName"
          {...register("companyName")} 
          placeholder='Company name'
          value={data.companyName}
          onChange={(e) => {
            setData({ ...data, companyName: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="typeCompany"
          {...register("typeCompany")} 
          placeholder='Type of company'
          value={data.typeCompany}
          onChange={(e) => {
            setData({ ...data, typeCompany: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="companyRecord"
          {...register("companyRecord")} 
          placeholder='Company record number'
          value={data.companyRecord}
          onChange={(e) => {
            setData({ ...data, companyRecord: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
            <input 
            className='input'
            ref={ref1}
            onFocus={() => (ref1.current.type = "date")}
            onBlur={() => (ref1.current.type = "text")}
            placeholder="Company record history" 
            type="text"
            value={data.companyDate}
            onChange = {(e) => {
              setData({ ...data,  companyDate: e.target.value });
            }}
              />
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="currentCity"
          {...register("currentCity")} 
          placeholder='Current city'
          value={data.currentCity}
          onChange={(e) => {
            setData({ ...data,  currentCity: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="currentAddress"
          {...register("currentAddress")} 
          placeholder='Current Address'
          value={data.currentAddress}
          onChange={(e) => {
            setData({ ...data,  currentAddress: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="detaileBusiness"
          {...register("detaileBusiness")} 
          placeholder="Company's detialed business"
          value={data.detaileBusiness}
          onChange={(e) => {
            setData({ ...data, detaileBusiness: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="email"
          name="companyEmail"
          {...register("companyEmail")} 
          placeholder="Company Email address"
          value={data.companyEmail}
          onChange={(e) => {
            setData({ ...data, companyEmail: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
            <ReactPhoneInput  
            value={num}
            onChange={setNum}
            className="phone_number" 
            placeholder='Company mobile number' 
            defaultCountry="sy" enableSearchField />
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="phoneNumber"
          {...register("phoneNumber")} 
          placeholder="Phone number"
          value={data.phoneNumber}
          onChange={(e) => {
            setData({ ...data, phoneNumber: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="faxNumber"
          {...register("faxNumber")} 
          placeholder="Fax number"
          value={data.faxNumber}
          onChange={(e) => {
            setData({ ...data, faxNumber: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="number_partners"
          {...register("number_partners")} 
          placeholder="Number of partners"
          value={data.number_partners}
          onChange={(e) => {
            setData({ ...data, number_partners: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_1'>
              <label htmlFor="file2">
                  <p>Upload company record</p>
                  <img src={file} alt="" width="30"/>
              </label>
              <input 
                  className='input text-light' 
                  name='uploadFile' 
                  id="file2" 
                  placeholder="Upload file" 
                  type="file"
                  onChange = {(e)=>{
                    setData({...data , file_record:e.target.files[0]})
                  }}
                  />                     
        </div>
        <div className='my-3 input_1'>
            <label htmlFor="file2">
                <p>تحميل عقد تأسيس الشركة</p>
                <img src={file} alt="" width="30"/>
            </label>
            <input 
              onChange = {(e)=>{
                setData({...data , establContract:e.target.files[0]})
              }}
                className='input text-light' 
                name='uploadFile' 
                id="file2" 
                placeholder="Upload file" 
                type="file"/>                     
        </div>
        </form>
    </div>
  )
}

export default CompanyInfo;
