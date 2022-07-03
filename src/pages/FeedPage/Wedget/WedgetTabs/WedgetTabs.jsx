import * as React from "react";

import "./WedgetTabs.css";
import Tabs from "../../../../components/Tabs/Tabs";
import TabPanel from "../../../../components/Tabs/TabPanel";

export default function WedgetTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
                  src={require("../../../../helpers/images/avatar3.jpg")}
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
                  src={require("../../../../helpers/images/code.jpg")}
                  alt="profile-photo"
                />
              </div>
              <h4>Code Academy</h4>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
