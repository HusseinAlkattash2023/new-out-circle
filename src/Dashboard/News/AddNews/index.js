import { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
  
  const [content, setContent] = useState("");

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${BASE_API_URL}/api/news/add-news`, {
      content,
    })
      .then((res) => navigate("/dashboard/admin/news-managment"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-news text-center">
      <div className="container">
        <h1>Add News</h1>
        <form className="add-news-form mb-4" onSubmit={handleSubmit}>
          <textarea
            type="text"
            placeholder="Please Enter Your News Text"
            className="form-control mb-4"
            onChange={(e) => setContent(e.target.value)}
            style={{ resize: "none" }}
            required
          />
          <button type="submit" className="btn btn-primary">
            Add News
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
