import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as authServices from "../../services/AuthService";
import RegisterSVG from "../../helpers/images/register.svg";

const Index = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    userName: "",
    birthDate:"",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const backToLogin = {
    textDecoration: "none",
    color: "#393939",
    fontStyle: "italic",
  };

  const handleChange = (name, value) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      registerData.fullName !== "" &&
      registerData.userName !== "" &&
      registerData.birthDate !== "" &&
      registerData.email !== "" &&
      registerData.password !== "" &&
      registerData.passwordConfirm !== ""
    ) {
      try {
        const resp = await authServices.RegisterService(registerData);
        if (resp) {
          toast.success(
            "User was registered successfully,check your email address!"
          );
          navigate("/login");
        } else {
          toast.error("It occurs any error, please, try again!");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-3">
        <div className="col-lg-7">
          <div className="register-img">
            <img src={RegisterSVG} alt="Register" className="w-100" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5 register-form">
          <div className="register-sign-in register pt-lg-5">
            <h3 className="mb-4 text-center">Welcome!</h3>
            <form>
              <div className="mb-4">
                <input
                  id="fullName"
                  required
                  className="form-control w-100 shadow-none"
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  id="userName"
                  required
                  className="form-control w-100 shadow-none"
                  type="text"
                  name="userName"
                  placeholder="Username"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  id="birthDate"
                  required
                  className="form-control w-100 shadow-none"
                  type="date"
                  name="birthDate"
                  placeholder="Birth date"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  id="email"
                  required
                  className="form-control w-100 shadow-none"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  id="password"
                  required
                  className="form-control w-100 shadow-none"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  id="passwordConfirm"
                  required
                  className="form-control w-100 shadow-none"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </div>

              <div className="mb-3">
                <button
                  className="fw-bold w-100"
                  type="submit"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
              <div className="text-end">
                <Link style={backToLogin} to="/login">
                  Back to login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
