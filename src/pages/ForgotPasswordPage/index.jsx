import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { setReset } from "../../redux/Auth/AuthSlice";
import * as authServices from "../../services/AuthService";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [forgotData, setForgotData] = useState("");

  const backToLogin = {
    textDecoration: "none",
    color: "#393939",
    fontStyle:"italic"
  };

  const handleChange = (value) => {
    setForgotData(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (forgotData !== "") {
      try {
        const resp = await authServices.ForgotPasswordService(forgotData);
        if (resp) {
          sessionStorage.setItem("resetToken", resp);
          sessionStorage.setItem("currentMail", forgotData);
          dispatch(setReset(resp));
        }

      } catch (error) {
        console.log("error: ", error);
      }
      navigate("/")
    }
  };
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="register-sign-in sign-in pt-5">
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
