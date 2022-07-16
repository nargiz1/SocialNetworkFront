import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { toast } from "react-toastify";

import * as authServices from "../../services/AuthService";
import ResetSVG from "../../helpers/images/reset.svg";

const Index = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token").replace(/ /g, "+");
  // const token=new URLSearchParams(search).get('token');

  const email = new URLSearchParams(search).get("email");

  useEffect(() => {
    console.log("token", token);
    console.log("email", email);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("email", email);
  }, [token, email]);

  const [resetData, setResetData] = useState({
    email: "",
    newPassword: "",
    passwordConfirm: "",
    token: "",
  });

  const handleChange = (name, value) => {
    setResetData({ ...resetData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const email = sessionStorage.getItem("email");
    resetData.email = email;
    resetData.token = token;

    if (resetData.newPassword !== "" && resetData.passwordConfirm !== "") {
      try {
        const resp = await authServices.ResetPasswordService(resetData);
        if (resp) {
          toast.success("You changed you password successfully!");
          navigate("/");
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const backToForgot = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/forget");
  };

  return (
    <>
      <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-6 col-lg-7 reset-img">
          <img src={ResetSVG} alt="reset" className="w-100" />
          </div>
          <div className="col-md-6 col-lg-5 login-form">
            <div className="register-sign-in sign-in pt-5">
            <h3 className="mb-4 text-center">Reset Now!</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    className="form-control w-100 shadow-none"
                    onChange={(e) =>
                      handleChange("newPassword", e.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Enter your confirm password"
                    className="form-control w-100 shadow-none"
                    onChange={(e) =>
                      handleChange("passwordConfirm", e.target.value)
                    }
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                  <button onClick={backToForgot} className="fw-bold">
                    Go back
                  </button>
                  </div>
                 <div> <button
                    type="submit"
                    onClick={handleSubmit}
                    className="fw-bold"
                  >
                    Confirm
                  </button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
