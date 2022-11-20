import React from 'react'
import './Notifications.css'
import NewAdr from '../../component/NewAdr/NewAdr'
const Notifications = () => {
  return (
    <div className='notifications'>
        <NewAdr title={"notifications"} route={"userpage"}/>
    </div>
  )
}

export default Notifications
