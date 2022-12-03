import React , {useRef} from 'react'
import file from '../../../../Assets/images/file.png'

const InstituteInfoAr =({ setFile1 , data , setData })=>{
  const ref1 = useRef();
  const ref2 = useRef();
    return(
        <div>
          <form encType="multipart/form-data">
          <div className='my-3 input_'>
                      <input value={data.institute_name} onChange={(e)=> setData({...data , institute_name:e.target.value})} placeholder="اسم المؤسسة" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input value={data.record_number} onChange={(e)=> setData({...data , record_number:e.target.value})} placeholder="رقم سجل المؤسسة" type="number"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input 
                      ref={ref2}
                      value={data.record_history} 
                      onChange={(e)=> setData({...data , record_history:e.target.value})}  
                      onFocus={() => (ref2.current.type = "date")}
                      onBlur={() => (ref2.current.type = "text")}
                      type="text" 
                      placeholder="تاريخ سجل المؤسسة" 
                      style={{width:"400px"}}
                      />
                    </div>
                    <div className='my-3 input_'>
                      <input value={data.current_city} onChange={(e)=> setData({...data , current_city:e.target.value})} placeholder="المحافظة" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input value={data.current_address} onChange={(e)=> setData({...data , current_address:e.target.value})}  placeholder="العنوان الحالي" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <textarea value={data.detailed_business} onChange={(e)=> setData({...data , detailed_business:e.target.value})}  placeholder="تفاصيل نشاط المؤسسة الحالي" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input value={data.institute_email} onChange={(e)=> setData({...data , institute_email:e.target.value})}  placeholder="البريد الإلكتروني للمؤسسة" type="email"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'> 
                      <input 
                      ref={ref1}
                      value={data.start_date} 
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
                    value={data.phone_number} 
                    onChange={(e)=> setData({...data , phone_number:e.target.value})}
                    placeholder="الهاتف الأرضي" 
                    type="number"/>
                  </div>
                  <div className='my-3 input_'>
                    <input 
                    value={data.fax_number} 
                    onChange={(e)=> setData({...data , fax_number:e.target.value})}
                    placeholder="رقم الفاكس" 
                    type="number"
                    />
                  </div>
                  <div className='my-3 input_'>
                    <input 
                    value={data.landline_number} 
                    onChange={(e)=> setData({...data , landline_number:e.target.value})}
                    placeholder="تحويلة الهاتف الأرضي" 
                    type="number"/>
                  </div>
                  <div className='my-3 input_1'>
                    <label htmlFor="file1">
                        <p>تحميل سجل المؤسسة</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input 
                    className ='input' 
                    name = 'uploadFile' 
                    id = "file1" 
                    placeholder="Upload file" 
                    type="file"
                    onChange = {(e) => setFile1(e.target.files[0])} 
                    />                     
                </div>
          </form>
        </div>
    )
}

export default InstituteInfoAr;