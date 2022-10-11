import { Avatar } from "@mui/material";
import React from "react";
import Header from "./Header";
import "./Profile.css";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

function Profile() {
  const name = "catarina";
  return (
    <div className="profile">
      <Header backButton="/" msgButton="/" />
      <div className="profile__beforeBody">
        <div className="profile__body">
          <h1 className="profile__body__text">{name}</h1>
          <div className="profile__body__icons">
            <IconButton>
              <ContactSupportIcon
                fontSize="large"
                className="profile__body__icons__support"
              />
            </IconButton>
            <Avatar
              sx={{ height: "50%", width: "50%" }}
              className="profile__body__icons__image"
              alt="utilizador"
              src="https://www.atelevisao.com/cl_resize/c6gNa8oJycIj36Qtjbc8nrA9g60bQ7QBulW9xeMfPMU/rs:fill:500:0/g:ce/q:70/aHR0cHM6Ly93d3cuYXRlbGV2aXNhby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDMvdG9tYXMtc2FudG9zLmpwZw"
            />
            <IconButton>
              <Link to={`/Profile/${name}Settings`}>
                <SettingsIcon
                  fontSize="large"
                  className="profile__body__settings"
                />
              </Link>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
