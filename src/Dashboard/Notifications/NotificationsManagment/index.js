import { Link } from "react-router-dom";

const NotificationsManagment = () => {
  return (
    <div className="news-managment text-center">
      <div className="container">
        <h1>Notifications Managment Page</h1>
        <Link to="/dashboard/admin/add-notification" className="btn btn-danger d-block mb-4">Add Notifications</Link>
      </div>
    </div>
  );
};

export default NotificationsManagment;