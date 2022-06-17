import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ showIcon = true, collapseSidebar = false, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="container-fluid" style={{ paddingTop: "64px" }}>
          <div className="row">
              <div className="col-12">
                <Header showIcon={showIcon} setIsOpen={setIsOpen} isOpen={isOpen}/>
              </div>
          </div>
          <div className="row">
              <div className="col-md-2">
                <Sidebar isOpen={isOpen && !collapseSidebar}/>
              </div>
              <div className="col-md-10 p-0">
                {children}
              </div>
          </div>
        </div>        
    );
}


export default Layout