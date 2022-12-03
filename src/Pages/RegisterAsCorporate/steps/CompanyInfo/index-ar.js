import React , {useRef} from 'react'
import { useForm} from 'react-hook-form'
import file from '../../../../Assets/images/file.png';
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CompanyInfoAr = ({ data , setData , num , setNum }) => {
    const ref2 = useRef();
    const ref1 = useRef();
  const { register , formState:{errors}} = useForm()
  return (
    <div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="companyName"
          {...register("companyName")} 
          placeholder='اسم الشركة'
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
          placeholder='نوع الشركة'
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
          placeholder='رقم سجل الشركة'
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
                    placeholder="تاريخ سجل الشركة" 
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
          placeholder='المحافظة'
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
          placeholder='العنوان الحالي'
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
          placeholder="تفاصيل نشاط الشركة الحالي"
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
          placeholder="البريد الألكتروني للشركة"
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
            placeholder='رقم موبايل الشركة' 
            defaultCountry="sy" enableSearchField />
        </div>
        <div className='my-3 input_'>
            <input 
            className='input'
            ref={ref2}
            onFocus={() => (ref2.current.type = "date")}
            onBlur={() => (ref2.current.type = "text")}
            placeholder="تاريخ بدء العمل الفعلي" 
            type="text"/> 
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="phoneNumber"
          {...register("phoneNumber")} 
          placeholder="الهاتف الأرضي"
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
          placeholder="رقم الفاكس"
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
          placeholder="عدد الشركاء"
          value={data.number_partners}
          onChange={(e) => {
            setData({ ...data, number_partners: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>تحميل سجل الشركة</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input
                    onChange = {(e)=>{
                      setData({...data , file_record:e.target.files[0]})
                    }}
                    className='input text-light' 
                    name='uploadFile' 
                    id="file2" 
                    placeholder="Upload file" 
                    type="file"/>                     
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
    </div>
  )
}

export default CompanyInfoAr;