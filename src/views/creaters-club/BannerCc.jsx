import React from "react";
import bannerImage from "./../../assets/images/creaters/creaters-club.png";

const BannerCc = () => {
  return (
    <section className="banner banner-cc section pb-0">
      <div className="container">
        <div className="banner-head">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="heades">
                <h2>Your digital journey starts here no barriers, no limits</h2>
                <div className="vision">
                  <a href="#!" className="button btn-2 button-nsd">
                    Unlock Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BannerCc;
