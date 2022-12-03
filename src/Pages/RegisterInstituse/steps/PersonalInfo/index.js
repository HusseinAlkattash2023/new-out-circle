import React ,{useRef} from 'react';
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



const PartnerInfo = ({ num , setNum , data , setData})=>{
    const ref = useRef();
    return(
        <div>
            <form>
                <div className='my-3 input_'>
                    <input value={data.username} onChange={(e) => setData({...data , username:e.target.value})}  placeholder="User name" type="text"/>
                  {/* <p>{errors.username?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input value={data.password} onChange={(e) => setData({...data , password:e.target.value})}   placeholder="Password" type="password"/>
                  {/* <p>{errors.password?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input value={data.confirm_password} onChange={(e) => setData({...data , confirm_password:e.target.value})}   placeholder="Confirm Password" type="password"/>
                  {/* <p>{errors.confirmPasswod?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input value={data.full_name} onChange={(e) => setData({...data , full_name:e.target.value})}  placeholder="Full Name" type="text"/>
                  {/* <p>{errors.confirmPasswod?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                <input 
                    ref={ref}
                    value={data.born_date} 
                    onChange={(e) => setData({...data , born_date:e.target.value})}
                    type="text" 
                    placeholder="Born date" 
                    style={{width:"400px"}}
                    onFocus={() => (ref.current.type = "date")}
                    onBlur={() => (ref.current.type = "text")}
                    className="input"
                    />
                </div>
                <div className='my-3 input_'>
                <ReactPhoneInput
                value={num}
                onChange={setNum}
                className="phone_number"
                placeholder="Mobile number"
                defaultCountry="sy"
                enableSearchField
              />
                </div>
                <div className='my-3 input_'>
                <input
                value={data.whatsapp_number} 
                onChange={(e) => setData({...data , whatsapp_number:e.target.value})}
                className="input"
                placeholder="Whatsapp number"
                type="number"
              />
                </div>
                <div className='my-3 input_'>
                    <input 
                    value={data.email} 
                    onChange={(e) => setData({...data , email:e.target.value})}   
                    placeholder="E-mail address" 
                    type="email"/>
                  {/* <p>{errors.confirmPasswod?.message}</p> */}
                </div>
            </form>
        </div>
    )
}
export default PartnerInfo