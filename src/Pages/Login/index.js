import React, { useState , useEffect} from "react";
import { Link , useNavigate } from "react-router-dom";
import back from "../../Assets/images/back.png";
import toast, { Toaster } from "react-hot-toast";
import Axios from "axios";
import login from "../../Assets/images/Mask Group 2.png";
import logoLogin from "../../Assets/images/logoLogin.png";
import "./index.css";

function Login() {
  const intialValues = { email: "", password: "", user_type: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    Axios.get(
      `http://localhost:8000/api/users/user-info?${`input=${formValues.email}`}&${`password=${formValues.password}`}&${`user_type=${formValues.user_type}`}`
    )
      .then((res) => {
        let data = res.data;
        if (typeof data === "string") {
          toast.error(res.data);
        } else {
          switch (formValues.user_type) {
            case "companies":
                setTimeout(() => {
                    navigate("/corporate")
                }, 3000);
                break;
            case "institute":
                setTimeout(() => {
                    navigate("/institute")
                }, 3000);
                break;
            case "scientific_careers":
                setTimeout(() => {
                    navigate("/scientific")
                    }, 3000);
                break;
            case "craftsmen":
                setTimeout(() => {
                    navigate("/handicraft")
                }, 3000);
                break;
            case "individuals":
                setTimeout(() => {
                    navigate("/individuals")
                }, 3000);
                break;
            default:
                break;
        }
          toast.success("Logged in successfully...");
          localStorage.setItem("users", JSON.stringify(data));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Please enter email";
    } else if (!regex.test(values.email) && typeof values.email === Number) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Please enter password";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.user_type) {
      errors.user_type = "Please enter type account";
    }
    return errors;
  };

  return (
    <div className="login">
      <Link to="/" className="back">
        <span>Back</span>
        <img src={back} alt="" />
      </Link>
      <div className="login_">
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logoLogin} alt="" style={{ width: "225px" }} />
            </div>
            <div>
              <div><Toaster /></div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="bar">
                  <div className="select">
                    <label>select your type account</label>
                    <br />
                    <select
                      name="user_type"
                      value={formValues.user_type}
                      onChange={handleChange}
                    >
                      <option value="">...</option>
                      <option value="companies">Corporate</option>
                      <option value="institutes">Institute</option>
                      <option value="scientific_careers">
                        Scientific Profissional
                      </option>
                      <option value="craftsmen">Handicraft</option>
                      <option value="individuals">Individuals</option>
                    </select>
                    {formErrors.user_type && (
                      <span className="error" style={{ color: "red" }}>
                        {formErrors.user_type}
                      </span>
                    )}
                  </div>
                  <div className="email">
                    <label htmlFor="email">mobile number or email</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={formErrors.email && "input-error"}
                    />
                    {formErrors.email && (
                        <span className="error" style={{ color: "red" }}>
                        {formErrors.email}
                        </span>
                    )}
                    </div>
                    <div className="password">
                    <label htmlFor="password_">password</label>
                    <br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        className={formErrors.password && "input-error"}
                    />
                    {formErrors.password && (
                        <span className="error" style={{ color: "red" }}>
                            {formErrors.password}
                        </span>
                    )}
                </div>
                </div>
                <Link to="/forget-password" className="forget">
                    forget password
                </Link>
                <button type="submit" className="loginButton mt-1">
                    login
                </button>
                <br />
            </form>
            <div className="register mt-2">
                <p className="my-0">don't have an account?</p>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            </div>
        </div>
    </div>
    <div className="section2">
        <img src={login} alt="" />
    </div>
    </div>
);
}

export default Login;
