import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Tabs from "../../components/Tabs/Tabs";
import TabPanel from "../../components/Tabs/TabPanel";

const Layout = ({ showIcon = true, collapseSidebar = false, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container-fluid" style={{ paddingTop: "64px" }}>
      <div className="row">
        <div className="col-12">
          <Header showIcon={showIcon} setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar isOpen={isOpen && !collapseSidebar} />
        </div>
        <div className="col-md-10 p-0">
          {children}
          <div>
            <button
              className="chat-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <AiOutlineMessage />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header d-flex align-items-center justify-content-between pb-0">
                <h4 className="offcanvas-title" id="offcanvasRightLabel">
                  Chats
                </h4>
                <div className="search-button" onClick={() => setSearch(!search)}>
                  <BsSearch/>
                </div>
              </div>
                  {search?(
                     <div>
                     <input type="text" placeholder="Search..." className="w-100 border-0 p-3 pb-0" style={{"outline":"none"}}/>
                   </div>
                  ):null}
              <div className="offcanvas-body">
                <Tabs
                  activeTab={value}
                  handleTabChange={handleChange}
                  tabs={["Friends", "Groups"]}
                >
                  <TabPanel value={value} index={0}>
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
                        <h4>Fidan Ganbarli</h4>
                      </a>
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <div>
                      <a
                        href="#"
                        className="d-flex align-items-center mb-3 text-dark text-decoration-none"
                      >
                        <div>
                          <img
                            className="profile-photo"
                            src={require("../../helpers/images/code.jpg")}
                            alt="profile-photo"
                          />
                        </div>
                        <h4>Code Academy</h4>
                      </a>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
