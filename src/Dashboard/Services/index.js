import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services text-center">
      <div className="container">
        <h1>Services Page</h1>
        <Link to="/dashboard/admin/ads-managment" className="btn btn-danger d-block mb-4">Ads Managment</Link>
        <Link to="/dashboard/admin/news-managment" className="btn btn-danger d-block mb-4">News Managment</Link>
        <Link to="/dashboard/admin/notifications-managment" className="btn btn-danger d-block">Notifications Managment</Link>
      </div>
    </div>
  );
};

export default Services;
