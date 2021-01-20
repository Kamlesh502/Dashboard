import React from "react";
import "./Sidebar.css";

import Chart from "./icons/a-chart.png";
import Atsign from "./icons/at-sign-2.png";
import Deleted from "./icons/bin.png";
import Draft from "./icons/i-edit.png";
import Settings from "./icons/privacy-settings.png";
import Sent from "./icons/send.png";
import Fav from "./icons/star.png";
import pic from "./icons/6.png";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="profile">
        <div id="profilepic">
          <img src={pic} alt="fireSpot" />
        </div>
        <div className="profilename">
            Kamlesh Bishnoi
        </div>
        <div className="myprofile">
            My Profile
            
        </div>
        
        
      </div>
      
      <div className="Menu">
        <div className="Menu_header">
          <div>Menu</div>
        </div>
        <div className="Menu_items">
          <div id="icons">
            <img src={Atsign} alt="fireSpot" />
          </div>
          <div>Inbox</div>
        </div>
        <div className="Menu_items">
          <div id="icons">
            <img src={Sent} alt="fireSpot" />
          </div>
          <div>Sent</div>
        </div>
        <div className="Menu_items">
          <div id="icons">
            <img src={Draft} alt="fireSpot" />
          </div>
          <div>Draft</div>
        </div>
        <div className="Menu_items">
          <div id="icons">
            <img src={Deleted} alt="fireSpot" />
          </div>
          <div>Deleted</div>
        </div>

        <div className="Menu_items">
          <div id="icons">
            <img src={Fav} alt="fireSpot" />
          </div>
          <div>Favrouite</div>
        </div>
        <div className="Menu_items">
          <div id="icons">
            <img src={Chart} alt="fireSpot" />
          </div>
          <div>Analytics</div>
        </div>
        <div className="Menu_items">
          <div id="icons">
            <img src={Settings} alt="fireSpot" />
          </div>
          <div>Settings</div>
        </div>
        <div className="UP_btn">
            Upgrade Plan
        </div>
        <div className="CS_btn">Contact Support</div>
      </div>
    </div>
  );
}

export default Sidebar;
