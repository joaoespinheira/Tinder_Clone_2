import React from "react";
import "./SwipeButtons.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from "@mui/icons-material/Replay";
import StarRateIcon from "@mui/icons-material/StarRate";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon
          // sx={{
          //   color: "rgba(255, 220, 61)",
          // }}
          style={{ color: "#f5b748" }}
          fontSize="large"
        />
      </IconButton>
      <IconButton className="swipeButtons__like">
        <FavoriteIcon
          style={{ color: "#d50000" }}
          // sx={{
          //   color: "#d50000",
          // }}
          fontSize="large"
        />
      </IconButton>
      <IconButton className="swipeButtons__close">
        <CloseIcon
          style={{ color: "#76e2b3" }}
          // sx={{
          //   color: "#76e2b3",
          // }}
          fontSize="large"
        />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon
          style={{ color: "#62b4f9" }}
          // sx={{
          //   color: "#62b4f9",
          // }}
          fontSize="large"
        />
      </IconButton>
      <IconButton className="swipeButtons__flash">
        <FlashOnIcon
          sx={{
            color: "#915dd1",
          }}
          fontSize="large"
        />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
