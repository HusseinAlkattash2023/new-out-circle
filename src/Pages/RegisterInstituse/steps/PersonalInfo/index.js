import React ,{useRef} from 'react';
import ReactPhoneInput from "react-phone-input-2";


const PartnerInfo = ()=>{
    const ref = useRef();
    return(
        <div>
                <div className='my-3 input_'>
                    <input   placeholder="User name" type="text"/>
                  {/* <p>{errors.username?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input   placeholder="Password" type="password"/>
                  {/* <p>{errors.password?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input   placeholder="Confirm Password" type="password"/>
                  {/* <p>{errors.confirmPasswod?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                    <input   placeholder="Full Name" type="text"/>
                  {/* <p>{errors.confirmPasswod?.message}</p> */}
                </div>
                <div className='my-3 input_'>
                <input 
                    ref={ref}
                    // {...register("bornDate")} 
                    type="text" 
                    placeholder="Born date" 
                    style={{width:"400px"}}
                    onFocus={() => (ref.current.type = "date")}
                    onBlur={() => (ref.current.type = "text")}
                    className="input"
                    />
                </div>
                <div className='my-3 input_'>
                <ReactPhoneInput  className="phone_number" placeholder='Mobile number' defaultCountry="sy" enableSearchField />
                </div>
                <div className='my-3 input_'>
                <ReactPhoneInput  className="phone_number" placeholder='Whtasapp number' defaultCountry="sy" enableSearchField />
                </div>
                <div className='my-3 input_'>
                    <input   placeholder="E-mail address" type="email"/>
                  {/* <p>{errors.confirmPasswod?.message}</p> */}
                </div>
 
        </div>
    )
}
export default PartnerInfo