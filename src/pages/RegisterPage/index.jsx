import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authServices from "../../services/AuthService";
import { toast } from "react-toastify";
import RegisterSVG from "../../helpers/images/register.svg";

const Index = () => {

  const [registerData, setRegisterData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });  
  const navigate = useNavigate();
  const backToLogin = {
    textDecoration: "none",
    color: "#393939",
    fontStyle:"italic"
  };


  const handleChange = (name, value) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.fullName !== "" && registerData.userName !== "" && registerData.email !== "" && registerData.password !== "" && registerData.passwordConfirm !== "") {
      try {
        const resp = await authServices.RegisterService(registerData);
        if (resp) {
            toast.success("User was registered successfully,check your email address!");
            navigate("/login");
        } else {
            toast.error("It occurs any error, please, try again!");
        }
      } catch (error) {
        console.log('error: ', error);
      }
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center p-5">
      <div className="col-7">
          <img src={RegisterSVG} alt="Register" className="w-100" />
          </div>
          <div className="col-5">
            <div className="register-sign-in pt-5">
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
                  onChange={(e)=> handleChange(e.target.name,e.target.value)}
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
                  onChange={(e)=> handleChange(e.target.name,e.target.value)}
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
                  onChange={(e)=> handleChange(e.target.name,e.target.value)}
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
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.value)
                  }
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
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.value)
                  }
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
