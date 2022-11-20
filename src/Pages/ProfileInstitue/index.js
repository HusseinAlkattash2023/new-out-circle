import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import back from '../../images/back.png';
import institute from "../../images/Mask Group -2.png"
import PersonalInfo from './steps/PersonalInfo';
import InstituteInfo from './steps/InstituteInfo/InstituteInfo'
import user from '../../images/user.png'
import './ProfileInstitute.css';

const ProfileInstitute = () => {
  const [page , setPage] = useState(0);

  const displayPage = ()=>{
    if(page === 0){
      return <PersonalInfo />
    }else{
      return <InstituteInfo />
    } 
  }
  const FormTitle = ["Personal Information" , "Company Information"]
  return (
    <div className='profile_institute'>
        <header>
            <Link to="/" className='back'>
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <section>
        <header>
                <span className='icon'><img src={user} alt="" width="40px"/></span>
                <span className='text'>Your Profile</span>
        </header>
        <div className='form-container'>
          <div>
            <h3>{FormTitle[page]}</h3>
          </div>
          <div className='body' style={{overflowY:"scroll" , height:"300px"}}>
              {displayPage()}
          </div>
          <div className='footer'>
          <button
              className='next mt-3 ms-2 py-1 px-4'
              disabled={page === 0}
              onClick={(currPage) => {
                setPage((currPage) => currPage - 1);
              }}
              >Prev</button>
              <button
              className='next mt-3 ms-2 py-1 px-4'
              onClick={() => {
                  setPage(1)
                }}
              >
                {page === 1 ? "Update" : "Next"}
              </button>
          </div>
        </div>
        </section>
        <div className='section2'>
          <img src={institute} alt=""/>
        </div>
    </div>
  )
}

export default ProfileInstitute
