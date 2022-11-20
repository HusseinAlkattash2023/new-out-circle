import React , {useRef} from 'react'
import file from '../../../images/file.png'

const InstituteInfo =()=>{
  const ref = useRef()
    return(
        <div>
             <div className='my-3 input_'>
                      <input   placeholder="Institute name" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input    placeholder="Institute record number" type="number"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input   type="date" placeholder="Born date" style={{width:"400px"}}/>
                    </div>
                    <div className='my-3 input_'>
                      <input   placeholder="Current city" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input   placeholder="Current address" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <textarea   placeholder="institute's detailed business activity" type="text"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'>
                      <input   placeholder="Institute email address" type="email"/>
                      {/* <p>{errors.username?.message}</p> */}
                    </div>
                    <div className='my-3 input_'> 
                      <input 
                      ref={ref}
                      type="text" 
                      placeholder="Actual start date" 
                      style={{width:"400px"}}
                      onFocus={() => (ref.current.type = "date")}
                      onBlur={() => (ref.current.type = "text")}
                      className="input"
                      />
                  </div>
                  <div className='my-3 input_'>
                    <input placeholder="Phone number" type="number"/>
                  </div>
                  <div className='my-3 input_'>
                    <input placeholder="Fax number" type="number"/>
                  </div>
                  <div className='my-3 input_'>
                    <input placeholder="Landline extention" type="number"/>
                  </div>
                  <div className='my-3 input_1'>
                    <label htmlFor="file2">
                        <p>Upload institute record</p>
                        <img src={file} alt="" width="30"/>
                    </label>
                    <input  className='input' name='uploadFile' id="file2" placeholder="Upload file" 
                    type="file"/>                     
                </div>
        </div>
    )
}

export default InstituteInfo