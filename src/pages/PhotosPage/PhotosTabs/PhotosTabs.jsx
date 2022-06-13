import * as React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import "../PhotosTabs/index.css";

export default function PhotosTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Photos</h3>
        <a
          href="#"
          className="add-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <BsFillPlusCircleFill />
        </a>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header border-bottom p-4">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Create album
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <form>
              <div className="mb-2">
                <label>Album name</label>
                <input id="prod-name" className="w-100" required />
              </div>
              <div className="file-input-div mt-5">
                <label htmlFor="img">
                  <i className="upload-icon">
                    <AiOutlineCloudUpload />
                  </i>
                </label>
                <input type="file" id="img" className="custom-file-upload" />
              </div>
              <div className="form-submit mt-5">
                <button type="submit" className="w-100">Create Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={[
          "Photos of you",
          "Recently added",
          "Family",
          "University",
          "Albums",
        ]}
      >
        <TabPanel value={value} index={0}>
          <div className="row">
            <div className="col-md-3">
              <div className="photo">
                <img
                  className="w-100"
                  src={require("../../../helpers/images/img-1.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Photo2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Photo3
        </TabPanel>
        <TabPanel value={value} index={3}>
          Photo4
        </TabPanel>
        <TabPanel value={value} index={4}>
          Photo5
        </TabPanel>
      </Tabs>
    </>
  );
}
