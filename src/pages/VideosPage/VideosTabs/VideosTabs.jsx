import * as React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import Carousel from "../../../components/Carousel/Carousel";
import video from "../../../helpers/videos/video-1.mp4";
import "../VideosTabs/index.css";

export default function VideosTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Videos</h3>
        <a href="#" className="add-button">
          <BsFillPlusCircleFill />
        </a>
      </div>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Suggestions", "Newest", "My videos"]}
      >
        <TabPanel value={value} index={0}>
          <Carousel mdViewCount={4}>
            <div className="video-card">
              <div className="video-card-top">
                <video className="w-100" controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              <div className="video-card-bottom">
                <a href="#" className="video-heading">
                  2 Minute Timer
                </a>
                <a href="#" className="video-owner">
                  Ayshan Gambarova
                </a>
                <span>27 weeks ago</span> <span>150K views</span>
              </div>
            </div>
            <div className="video-card">
              <div className="video-card-top">
                <video className="w-100" controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              <div className="video-card-bottom">
                <a href="#" className="video-heading">
                  2 Minute Timer
                </a>
                <a href="#" className="video-owner">
                  Ayshan Gambarova
                </a>
                <span>27 weeks ago</span> <span>150K views</span>
              </div>
            </div>
            <div className="video-card">
              <div className="video-card-top">
                <video className="w-100" controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              <div className="video-card-bottom">
                <a href="#" className="video-heading">
                  2 Minute Timer
                </a>
                <a href="#" className="video-owner">
                  Ayshan Gambarova
                </a>
                <span>27 weeks ago</span> <span>150K views</span>
              </div>
            </div>
          </Carousel>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Video2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Video3
        </TabPanel>
      </Tabs>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Your videos</h3>
      </div>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Suggestions", "Newest", "My videos"]}
      >
        <TabPanel value={value} index={0}>
          <div className="row border-bottom pb-3 pt-3">
            <div className="col-12">
              <div className="row d-flex align-items-center">
                <div className="col-3">
                  <div className="video">
                    <video className="w-100" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="col-9">
                  <div className="video-content">
                    <a href="#" className="video-heading">
                      2 Minute Timer
                    </a>
                    <p className="about-video">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna .
                    </p>
                    <a href="#" className="video-owner">
                      Ayshan Gambarova
                    </a>
                    <div>
                      <span>27 week ago</span> <span>150K views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-bottom pb-3 pt-3">
            <div className="col-12">
              <div className="row d-flex align-items-center">
                <div className="col-3">
                  <div className="video">
                    <video className="w-100" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="col-9">
                  <div className="video-content">
                    <a href="#" className="video-heading">
                      2 Minute Timer
                    </a>
                    <p className="about-video">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna .
                    </p>
                    <a href="#" className="video-owner">
                      Ayshan Gambarova
                    </a>
                    <div>
                      <span>27 week ago</span> <span>150K views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Video2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Video3
        </TabPanel>
      </Tabs>
    </>
  );
}
