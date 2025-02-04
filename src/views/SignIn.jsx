import React from 'react'
import bg from "../assets/images/login.mp4"
import logo from "../assets/images/FINAL-JPG.png"

const SignIn = () => {
  return (
    <div className='sign_in'>
      <div className="div_container">
        <video className='bg_video' src={bg} autoPlay loop muted></video>
      </div>
      <div className="sign_in_container">
        <div className="row">
          <div className="col-md-6">
            <div className="left_continaer">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <h1>Create account</h1>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_continaer">
              <div className="google">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_3202_3112)">
    <path d="M4.6875 9.9999C4.6875 9.009 4.96051 8.08076 5.4348 7.28596V3.91455H2.0634C0.725312 5.65236 0 7.77029 0 9.9999C0 12.2295 0.725312 14.3474 2.0634 16.0853H5.4348V12.7138C4.96051 11.919 4.6875 10.9908 4.6875 9.9999Z" fill="#FBBD00"/>
    <path d="M10 15.3126L7.65625 17.6563L10 20.0001C12.2296 20.0001 14.3475 19.2747 16.0853 17.9367V14.5688H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z" fill="#0F9D58"/>
    <path d="M5.43391 12.7139L2.0625 16.0853C2.32742 16.4293 2.6159 16.7588 2.92805 17.071C4.8168 18.9597 7.32801 19.9999 9.9991 19.9999V15.3124C8.06066 15.3124 6.36172 14.2687 5.43391 12.7139Z" fill="#31AA52"/>
    <path d="M20 10C20 9.39164 19.9449 8.78211 19.8363 8.18844L19.7483 7.70801H10V12.3955H14.7442C14.2835 13.312 13.5752 14.0596 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10Z" fill="#3C79E6"/>
    <path d="M13.7565 6.24348L14.1708 6.65777L17.4854 3.34324L17.0711 2.92895C15.1823 1.0402 12.6711 0 10 0L7.65625 2.34375L10 4.6875C11.419 4.6875 12.7531 5.24008 13.7565 6.24348Z" fill="#CF2D48"/>
    <path d="M9.99914 4.6875V0C7.32805 0 4.81684 1.0402 2.92805 2.92891C2.6159 3.24106 2.32742 3.57055 2.0625 3.91465L5.43391 7.28606C6.36176 5.73125 8.0607 4.6875 9.99914 4.6875Z" fill="#EB4132"/>
  </g>
  <defs>
    <clipPath id="clip0_3202_3112">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>

<h2>Continue with Google</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
