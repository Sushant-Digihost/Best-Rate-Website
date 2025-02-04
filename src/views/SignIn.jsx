import React from 'react'
import bg from "../assets/images/login.mp4"

const SignIn = () => {
  return (
    <div className='sign_in'>
      <video className='bg_video' src={bg} autoPlay loop muted></video>
    </div>
  )
}

export default SignIn
