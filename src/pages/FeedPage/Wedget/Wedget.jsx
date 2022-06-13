import React from 'react';
import "./Wedget.css";
import WedgetTabs from "./WedgetTabs/WedgetTabs";

function Wedget() {
  return (
      <div className='wedget position-fixed'>
        <WedgetTabs/>
      </div>
  )
}

export default Wedget;