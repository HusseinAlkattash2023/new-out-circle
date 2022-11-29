import React , {useRef} from 'react'
import file from '../../../../Assets/images/file.png'

const InstituteInfoAr =({ record_history , setFile1 , institute_name , data , setData , institute_email , record_number , current_city , current_address , detailed_business , start_date , phone_number , fax_number , landline_number})=>{
  const ref1 = useRef();
  const ref2 = useRef();
    return(
        <div>
          <form encType="multipart/form-data">
          <div className='my-3 input_'>
                      <input value={institute_name} onChange={(e)=> setData({...data , institute_name:e.target.value})} placeholder="اسم المؤسسة" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input value={record_number} onChange={(e)=> setData({...data , record_number:e.target.value})} placeholder="رقم سجل المؤسسة" type="number"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input 
                      ref={ref2}
                      value={record_history} 
                      onChange={(e)=> setData({...data , born_date:e.target.value})}  
                      onFocus={() => (ref2.current.type = "date")}
                      onBlur={() => (ref2.current.type = "text")}
                      type="text" 
                      placeholder="تاريخ سجل المؤسسة" 
                      style={{width:"400px"}}
                      />
                    </div>
                    <div className='my-3 input_'>
                      <input value={current_city} onChange={(e)=> setData({...data , current_city:e.target.value})} placeholder="المحافظة" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input value={current_address} onChange={(e)=> setData({...data , current_address:e.target.value})}  placeholder="العنوان الحالي" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <textarea value={detailed_business} onChange={(e)=> setData({...data , detailed_business:e.target.value})}  placeholder="تفاصيل نشاط المؤسسة الحالي" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input value={institute_email} onChange={(e)=> setData({...data , institute_email:e.target.value})}  placeholder="البريد الإلكتروني للمؤسسة" type="email"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'> 
                      <input 
                      ref={ref1}
                      value={start_date} 
                      onChange={(e)=> setData({...data , start_date:e.target.value})}
                      type="text" 
                      placeholder="تاريخ بدء العمل الفعلي" 
                      style={{width:"400px"}}
                      onFocus={() => (ref1.current.type = "date")}
                      onBlur={() => (ref1.current.type = "text")}
                      className="input"
                      />
                  </div>
                  <div className='my-3 input_'>
                    <input 
                    value={phone_number} 
                    onChange={(e)=> setData({...data , phone_number:e.target.value})}
                    placeholder="الهاتف الأرضي" 
                    type="number"/>
                  </div>
                  <div className='my-3 input_'>
                    <input 
                    value={fax_number} 
                    onChange={(e)=> setData({...data , fax_number:e.target.value})}
                    placeholder="رقم الفاكس" 
                    type="number"
                    />
                  </div>
                  <div className='my-3 input_'>
                    <input 
                    value={landline_number} 
                    onChange={(e)=> setData({...data , landline_number:e.target.value})}
                    placeholder="تحويلة الهاتف الأرضي" 
                    type="number"/>
                  </div>
                  <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>تحميل سجل المؤسسة</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input 
                    onChange = {(e) => setFile1(e.target.files[0])} 
                    className ='input' 
                    name = 'uploadFile' 
                    id = "file2" 
                    placeholder="Upload file" 
                    type="file"/>                     
                </div>
          </form>
        </div>
    )
}

export default InstituteInfoAr;