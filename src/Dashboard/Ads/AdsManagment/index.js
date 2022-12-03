import { Link } from "react-router-dom";

const AdsManagment = () => {
  return (
    <div className="add-managment text-center">
      <div className="container">
        <h1>Ads Managment Page</h1>
        <Link to="/dashboard/admin/add-ads" className="btn btn-danger d-block mb-4">Add Ads</Link>
        <Link to="/dashboard/admin/delete-ads" className="btn btn-danger d-block">Delete Ads</Link>
      </div>
    </div>
  );
};

export default AdsManagment;
