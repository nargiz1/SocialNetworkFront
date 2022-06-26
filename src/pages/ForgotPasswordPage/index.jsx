import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setReset } from "../../redux/Auth/AuthSlice";
import * as authServices from "../../services/AuthService";

const Index = () => {
  const dispatch = useDispatch();

  // const [forgotData, setForgotData] = useState({
  //   mail: "",
  // });

  const [forgotData, setForgotData] = useState("");

  const navigate = useNavigate();

  const backToLogin = {
    textDecoration: "none",
    color: "#393939",
    fontStyle:"italic"
  };


  // const handleChange = (name, value) => {
  //   setForgotData({ ...forgotData, [name]: value });
  // };

  const handleChange = (value) => {
    setForgotData(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (forgotData !== "") {
      try {
        const resp = await authServices.ForgotPasswordService(forgotData);
        console.log('FP resp',resp);
        if (resp) {
          sessionStorage.setItem("resetToken", resp);
          sessionStorage.setItem("currentMail", forgotData);
          dispatch(setReset(resp));
          navigate("/reset");
        }

      } catch (error) {
        console.log("error: ", error);
      }
    }
  };
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-6">
          <div className="register-sign-in pt-5">
            <div className="mb-4 text-center">
            <h3>Find Your Account</h3>
            <p>Please enter your email to search for your account.</p>
            </div>
            <form>
              <div className="mb-3">
                <input
                  id="mail"
                  required
                  className="custom-input w-100 shadow-none"
                  type="email"
                  name="mail"
                  placeholder="Email"
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Link to="/login" style={backToLogin}>
                    Back to login
                  </Link>
                </div>
                <div>
                  <button
                    className=" w-100 fw-bold"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Index;
