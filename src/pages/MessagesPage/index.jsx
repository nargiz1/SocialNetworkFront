import React from "react";
import { FiEdit,FiSend } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import Layout from "../../components/Layout";
import "./index.css";

const index = () => {
  return (
    <Layout showIcon={false} collapseSidebar={true}>
      <div className="chat-content vh-100">
        <div className="row">
          <div className="pe-0 col-md-4">
            <div className="message-inbox border-end vh-100">
              <div className="chat d-flex justify-content-between border-bottom">
                <h3>Chats</h3>
                <a href="#">
                  <FiEdit />
                </a>
              </div>
              <div className="message-content">
                <div className="d-flex align-items-center">
                  <div>
                    <a
                      href="#"
                      className="d-flex align-items-center mb-3 text-dark text-decoration-none"
                    >
                      <div>
                        <img
                          className="profile-photo"
                          src={require("../../helpers/images/avatar2.jpg")}
                          alt="profile-photo"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="message-by ms-3">
                    <div className="message-by-headline position-relative">
                      <h5>Stella Johnson</h5>
                      <span>4 hours ago</span>
                    </div>
                    <p>laoreet dolore magna aliquam erat...</p>
                  </div>
                </div>
              </div>
              <div className="message-content active-message">
                <div className="d-flex align-items-center">
                  <div>
                    <a
                      href="#"
                      className="d-flex align-items-center mb-3 text-dark text-decoration-none"
                    >
                      <div>
                        <img
                          className="profile-photo"
                          src={require("../../helpers/images/avatar3.jpg")}
                          alt="profile-photo"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="message-by ms-3">
                    <div className="message-by-headline position-relative">
                      <h5>Stella Johnson</h5>
                      <span>4 hours ago</span>
                    </div>
                    <p>laoreet dolore magna aliquam erat...</p>
                  </div>
                </div>
              </div>
              <div className="message-content">
                <div className="d-flex align-items-center">
                  <div>
                    <a
                      href="#"
                      className="d-flex align-items-center mb-3 text-dark text-decoration-none"
                    >
                      <div>
                        <img
                          className="profile-photo"
                          src={require("../../helpers/images/avatar4.jpg")}
                          alt="profile-photo"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="message-by ms-3">
                    <div className="message-by-headline position-relative">
                      <h5>Stella Johnson</h5>
                      <span>4 hours ago</span>
                    </div>
                    <p>laoreet dolore magna aliquam erat...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-0 col-md-8">
            <div className="thread">
              <div className="message-heading d-flex justify-content-between border-bottom">
                <h6>Ayshan Gambarova</h6>
                <a className="delete-messages d-flex align-items-center">
                  <RiDeleteBinLine />
                  <span className="ms-1">Delete conversation</span>
                </a>
              </div>
              <div className="message-date w-100 text-center mt-4">
                <span>06 December, 2022</span>
              </div>
              <div className="message-area mt-3">
                <div className="pe-4 ps-4">
                  <div className="w-100 d-flex justify-content-end align-items-center position-relative">
                    <div className="sender">
                      <a
                        href="#"
                        className="d-flex align-items-center mb-3 text-dark text-decoration-none"
                      >
                        <div>
                          <img
                            className="profile-photo"
                            src={require("../../helpers/images/avatar.jpg")}
                            alt="profile-photo"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="message-blue">Salam necesen?</div>
                  </div>
                  <div className="w-100 d-flex justify-content-start align-items-center mt-3 position-relative">
                    <div className="reciver">
                      <a
                        href="#"
                        className="d-flex align-items-center mb-3 text-dark text-decoration-none"
                      >
                        <div>
                          <img
                            className="profile-photo"
                            src={require("../../helpers/images/avatar4.jpg")}
                            alt="profile-photo"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="message-gray">Yaxshi sen?</div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="send-area border-top">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-11">
                    <input
                      type="text"
                      className=" w-100"
                      placeholder="Your Message..."
                    />
                  </div>
                  <div className="col-md-1">
                    <button className="send-button"><FiSend/></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
