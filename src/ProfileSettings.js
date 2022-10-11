import React from "react";
import Header from "./Header";
import "./ProfileSettings.css";

function ProfileSettings() {
  return (
    <div className="profileSettings">
      <div className="profileSettings__menu">
        <Header backButton="/" />
        <h1 className="profileSettings__menu__text">settings do profile</h1>
      </div>
    </div>
  );
}

export default ProfileSettings;
