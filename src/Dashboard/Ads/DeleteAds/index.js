import { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

const DeleteAds = () => {
  const [adsInfo, setAdsInfo] = useState([]);

  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  useEffect(() => {
    Axios.get(`${BASE_API_URL}/api/ads/all-ads`)
      .then((res) => {
        setAdsInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [BASE_API_URL]);

  const deleteAds = (e, adsId, index) => {
    e.preventDefault();
    Axios.delete(`${BASE_API_URL}/api/ads/delete-ads/${adsId}`)
      .then((res) => {
        document.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="delete-ads text-center">
      <div className="container">
        <h1>Delete Ads</h1>
        <table style={{ direction: "rtl", width: "100%" }}>
          <tbody>
            {adsInfo.map((ads, index) => (
              <tr key={ads._id} style={{ border: "2px solid #EEE" }}>
                <td style={{ border: "2px solid #EEE", padding: "10px" }}>
                  <textarea
                    type="text"
                    className="form-control"
                    defaultValue={ads.text}
                    style={{ resize: "none" }}
                    disabled
                  />
                </td>
                <td>
                  <form
                    className="delete-ads-form"
                    onSubmit={(e) => deleteAds(e, ads._id, index)}
                  >
                    <button type="submit" className="btn btn-danger">
                      Delete Ads
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteAds;
