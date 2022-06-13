import * as React from "react";
import "./index.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Tabs from "../../../../components/Tabs/Tabs";
import TabPanel from "../../../../components/Tabs/TabPanel";
import Carousel from "../../../../components/Carousel/Carousel";

export default function PagesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Pages</h3>
        <a href="#" className="add-button">
          <BsFillPlusCircleFill />
        </a>
      </div>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Suggestions", "Newest", "My pages"]}
      >
        <TabPanel value={value} index={0}>
          <Carousel mdViewCount={3}>
            <div className="pages-card">
              <img
                src={require("../../../../helpers/images/avatar4.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
            <div className="pages-card">
              <img
                src={require("../../../../helpers/images/avatar4.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
            <div className="pages-card">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
          </Carousel>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Carousel mdViewCount={3}>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar1.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
          </Carousel>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Carousel mdViewCount={3}>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar1.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis2</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following2
                </p>
              </div>
            </div>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis2</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following2
                </p>
              </div>
            </div>
          </Carousel>
        </TabPanel>
      </Tabs>
      <div className="d-flex justify-content-between">
        <h4 className="mb-4">Your Friends also following</h4>
        <a href="#" className="text-decoration-none">
          See all
        </a>
      </div>
      <Carousel mdViewCount={3}>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar1.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis2</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following2
                </p>
              </div>
            </div>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis2</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following2
                </p>
              </div>
            </div>
          </Carousel>

    </>
  );
}
