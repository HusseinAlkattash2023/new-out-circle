import React from 'react'
import { useForm} from 'react-hook-form'


/*
companyName:"",
    typeCompany:"",
    companyRecord:"",
    companyDate:"",
    currentCity:"",
    currentAddress:"",
    detaileBusiness:"",
    companyEmail:"",
    companyMobile:"",
    actualStart:"",
    phoneNumber:"",
    faxNumber:"",
    fileRecord:"",
    establContract:"",
    */
const CompanyInfo = ({formData , setFormData}) => {
  const { register , formState:{errors}} = useForm()
  return (
    <div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="companyName"
          {...register("companyName")} 
          placeholder='Company name'
          value={formData.companyName}
          onChange={(e) => {
            setFormData({ ...formData, companyName: e.target.value });
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
          value={formData.typeCompany}
          onChange={(e) => {
            setFormData({ ...formData, typeCompany: e.target.value });
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
          value={formData.companyRecord}
          onChange={(e) => {
            setFormData({ ...formData, companyRecord: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="currentCity"
          {...register("currentCity")} 
          placeholder='Current city'
          value={formData.currentCity}
          onChange={(e) => {
            setFormData({ ...formData,  currentCity: e.target.value });
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
          value={formData.currentAddress}
          onChange={(e) => {
            setFormData({ ...formData,  currentAddress: e.target.value });
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
          value={formData.detaileBusiness}
          onChange={(e) => {
            setFormData({ ...formData, detaileBusiness: e.target.value });
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
          value={formData.companyEmail}
          onChange={(e) => {
            setFormData({ ...formData, companyEmail: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="companyMobile"
          {...register("companyMobile")} 
          placeholder="Company mobile number"
          value={formData.companyMobile}
          onChange={(e) => {
            setFormData({ ...formData, companyMobile: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="phoneNumber"
          {...register("phoneNumber")} 
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={(e) => {
            setFormData({ ...formData, phoneNumber: e.target.value });
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
          value={formData.faxNumber}
          onChange={(e) => {
            setFormData({ ...formData, faxNumber: e.target.value });
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
          value={formData.number_partners}
          onChange={(e) => {
            setFormData({ ...formData, number_partners: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="file"
          name="file_record"
          {...register("file_record")} 
          placeholder=""
          value={formData.file_record}
          onChange={(e) => {
            setFormData({ ...formData, file_record: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
          <input
          type="file"
          name="establContract"
          {...register("establContract")} 
          placeholder=""
          value={formData.establContract}
          onChange={(e) => {
            setFormData({ ...formData, establContract: e.target.value });
          }}
          />
          <p></p>
        </div>
    </div>
  )
}

export default CompanyInfo;
