import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import corporate from "../../Assets/images/Mask Group -1.png";
import "./index.css";
import { BsPersonPlus } from "react-icons/bs";
import Axios from "axios";
import Partner from "../../Components/PartnerInfo/index";
import { useSelector } from "react-redux";

const AddPartners = () => {
  const [partnersInfo, setPartnersInfo] = useState([]);
  const number_of_partners = localStorage.getItem("number_partners");
  const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < number_of_partners; i++) {
      Axios.get(`${BASE_API_URL}/api/partners/is-partner-user-account-exist`, {
        user_info: partnersInfo[i],
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    Axios.post(`${BASE_API_URL}/api/partners/add-partners?company_id=638a4faab0d4e3e4615ef256` , {
        partners_info: partnersInfo,
    })
    .then(() => {

    })
    .catch(err => console.log(err));
  };
  return (
    <div className="add_parteners">
      <header>
        <Link to="/register">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </header>
      <section className="register">
        <header>
          <span className="icon">
            <BsPersonPlus />
          </span>
          <span className="text">add partners</span>
        </header>
        <form className="form-container">
          <div className="body">
            {(() => {
              const arr = [];
              for (let i = 0; i < number_of_partners; i++) {
                arr.push(
                  <div key={i}>
                    <Partner
                      num={i}
                      setPartnersInfo={setPartnersInfo}
                      partnersInfo={partnersInfo}
                    />
                  </div>
                );
              }
              return arr;
            })()}
          </div>
          <div className="footer">
            <button className="mt-3" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </section>
      <div className="background2">
        <img src={corporate} alt="" />
      </div>
    </div>
  );
};

export default AddPartners;
