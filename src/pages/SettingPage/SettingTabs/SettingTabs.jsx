import * as React from "react";
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";

const SettingTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Profile", "Privacy"]}
      >
        <TabPanel value={value} index={0}>
      Salam1
        </TabPanel>
        <TabPanel value={value} index={1}>
        Salam2
        </TabPanel>
      </Tabs>
    </>
  )
}

export default SettingTabs;