import React from 'react'
import update from '../../../images/update.png'
import file from '../../../images/file.png';

const InstituteInfo = ({value}) => {
  return (
    <div>
        <div className='information'>
            <input type="text" defaultValue={value || "institute name"}/>
            <div>
                <img src={update} alt=""/>
            </div>
        </div>
        <div className='information'>
            <input type="text" defaultValue={value || "institute record number"}/>
        </div>
        <div className='information'>
            <input type="text" defaultValue={value || "Actual start date"}/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "Current city"}/>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "Current address"}/>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "institute's detailed business active"}/>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "institute email address"}/>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "Actual start date"}/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "Phone number"}/>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "Fax number"}/>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <input type="text" defaultValue={value || "Landline extension"}/>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>Upload updated institute record</p>
          <img src={file} alt=""/>
        </div>
    </div>
  )
}

export default InstituteInfo
