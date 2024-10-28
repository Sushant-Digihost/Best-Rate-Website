import React from 'react'
import bar from "./../../assets/images/icons/bar.svg"

export const Banner = () => {
  return (
    <>
      <section className="banner section pb-0">
        <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="heades">
                    <h2>The Website You Envisioned is One Click Away!</h2>
                    <div className="vision">
                      <a href="#!" className="button btn-2">Bring your vision to life!</a>
                      <div className="bar">
                        <img src={bar} alt="" />
                      </div>
                    </div>
                </div>
              </div>
              </div>
              <div className="k5container">
                <h1>5K+</h1>
                <div className="offertitle">
                    <h4>HAND-CRAFTED DESIGNS CREATED BY WORLD-CLASS CREATIVES.</h4>
                </div>
                <div className="prebuild-container">
                  <h3>Pre-Built Websites</h3>
                </div>
              </div>
              
        </div>
      </section>
    </>
  )
}
