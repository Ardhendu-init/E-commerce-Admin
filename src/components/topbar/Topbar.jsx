import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import Badge from "@mui/material/Badge";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h1 className="logo">Fashnest.</h1>
        </div>
        <div className="topRight">
          <div className="topbarIcon">
            <Badge badgeContent={2}>
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </div>
          <div className="topbarIcon">
            <SettingsIcon />
          </div>

          <img
            src="https://images.unsplash.com/photo-1621294711156-a53bfc9df6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Administ"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
