import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import * as authServices from "../../services/AuthService";
import ResetSVG from "../../helpers/images/reset.svg";

const Index = () => {
  const navigate = useNavigate();

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
    const token = sessionStorage.getItem("resetToken");
    const mail = sessionStorage.getItem("currentMail");
    resetData["email"] = mail;
    resetData["token"] = token;

    if (resetData.newPassword !== "" && resetData.passwordConfirm !== "") {
      try {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willConfirm) => {
          if (willConfirm) {
            authServices
              .ResetPasswordService(resetData)
              .then(function (response) {
                if (response) {
                  swal("Poof! Your imaginary file has been deleted!", {
                    title: "Good job!",
                    icon: "success",
                  }).then(function () {
                    sessionStorage.clear();
                    navigate("/login");
                  });
                } else {
                  swal("Poof! Your imaginary file has been deleted!", {
                    title: "Bad job!",
                    icon: "error",
                  });
                }
              });
          }
        });
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
          <div className="col-7">
            <img src={ResetSVG} alt="Login" className="w-100" />
          </div>
          <div className="col-5">
            <div className="register-sign-in pt-5">
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
                  <button onClick={backToForgot} className="fw-bold">
                    Go back
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="fw-bold"
                  >
                    Confirm
                  </button>
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
