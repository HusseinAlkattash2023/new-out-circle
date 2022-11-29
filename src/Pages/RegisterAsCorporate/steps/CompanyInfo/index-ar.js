import React , {useRef} from 'react'
import { useForm} from 'react-hook-form'
import file from '../../../../Assets/images/file.png';

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
const CompanyInfoAr = ({formData , setFormData}) => {
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
          placeholder='نوع الشركة'
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
          placeholder='رقم سجل الشركة'
          value={formData.companyRecord}
          onChange={(e) => {
            setFormData({ ...formData, companyRecord: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
                    <input 
                    className='input'
                    ref={ref2}
                    onFocus={() => (ref2.current.type = "date")}
                    onBlur={() => (ref2.current.type = "text")}
                    placeholder="تاريخ سجل الشركة" 
                    type="text"/>
                    {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
                </div>
        <div className='my-3 input_'>
          <input
          type="text"
          name="currentCity"
          {...register("currentCity")} 
          placeholder='المحافظة'
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
          placeholder='العنوان الحالي'
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
          placeholder="تفاصيل نشاط الشركة الحالي"
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
          placeholder="البريد الألكتروني للشركة"
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
          placeholder="رقم موبايل الشركة"
          value={formData.companyMobile}
          onChange={(e) => {
            setFormData({ ...formData, companyMobile: e.target.value });
          }}
          />
          <p></p>
        </div>
        <div className='my-3 input_'>
            <input 
            className='input'
            ref={ref2}
            onFocus={() => (ref1.current.type = "date")}
            onBlur={() => (ref1.current.type = "text")}
            placeholder="تاريخ بدء العمل الفعلي" 
            type="text"/> 
        </div>
        <div className='my-3 input_'>
          <input
          type="number"
          name="phoneNumber"
          {...register("phoneNumber")} 
          placeholder="الهاتف الأرضي"
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
          placeholder="رقم الفاكس"
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
          placeholder="عدد الشركاء"
          value={formData.number_partners}
          onChange={(e) => {
            setFormData({ ...formData, number_partners: e.target.value });
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