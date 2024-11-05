import React from "react";
import FixedVideo from "./../../assets/images/video/fixed-btn-animation.mp4";
import { Link } from "react-router-dom";

const BrowseBtn = () => {
  return (
    <div className="BroweThemesBtn">
      <div className="btn-fixed">
        <div className="video_wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={FixedVideo}
            type="video/mp4"
          ></video>
        </div>
        <Link to="/themes">Browse Themes</Link>
      </div>
    </div>
  );
};

export default BrowseBtn;
