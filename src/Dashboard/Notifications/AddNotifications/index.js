import { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddNotification = () => {
  const [email, setEmail] = useState("");

  const [content, setContent] = useState("");

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${BASE_API_URL}/api/notifications/add-new-notification`, {
      email,
      content,
    })
      .then((res) => navigate("/dashboard/admin/news-managment"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-notification text-center">
      <div className="container">
        <h1>Add Notification</h1>
        <form className="add-notification-form mb-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Please Enter Customer Email"
            className="form-control mb-4"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Please Enter Your Notification Text"
            className="form-control mb-4"
            onChange={(e) => setContent(e.target.value)}
            style={{ resize: "none" }}
            required
          />
          <button type="submit" className="btn btn-primary">
            Add Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotification;
