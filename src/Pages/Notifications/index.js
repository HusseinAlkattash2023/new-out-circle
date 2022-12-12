import React , {useState , useEffect , Fragment , useCallback} from 'react'
import './index.css'
import NewAdr from '../../Components/NewAdr/NewAdr';
import {Link} from 'react-router-dom';
import back from '../../Assets/images/back.png';
import logo from '../../Assets/images/Group 360.svg';
import { useSelector } from "react-redux";
import Axios from 'axios';

const Notifications = () => {

  const [notificationInfo, setNotificationInfo] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const value = localStorage.getItem("email")

  const getAllNotifications = useCallback(() => {
    return new Promise((resolve, reject) => {
      Axios.get(`${BASE_API_URL}/api/notifications/all-notifications`, {
        email:value
      })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => reject(err));
    });
}, [BASE_API_URL]);

useEffect(()=> {
  getAllNotifications()
  .then((data)=> {
    notificationInfo.push(data)
    console.log(notificationInfo)
  })
  .catch((err) => console.log(err))
} , [BASE_API_URL , getAllNotifications]) 

  return (
    <div className='notifications'>
        <div className='notification'>
            <header>
            <Link className='back' to="">
                <span>Back</span>
                <img src={back} alt="" width="30px"/>
            </Link>
            </header>
            <div className='rectangle'>
            {
                notificationInfo.map((item) => (
                        <Fragment key={item._id} className="content">
                            <p className="news_ads">{item.content}</p>
                        </Fragment>
                    ))
            }
            </div>
            <div className='side'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <span className='title'>notifications</span>
            </div>
        </div>
    </div>
  )
}

export default Notifications
 /*
 Axios.get(`${BASE_API_URL}/api/notifications/all-notifications` , {
      email:value
    })
      .then((res) => {
        let data1 = res.data;
        setNotificationInfo(data1);
      }).catch((err) => console.log(err));
      */