import React from 'react'
import { Banner } from './themes/Banner'
import { ThemeList } from './themes/ThemeList'
import CtaHome from './Home/CtaHome'

export const Theme = () => {
  return (
    <>
        <Banner/>   
        <ThemeList/> 
        <CtaHome/>
    </>
  )
}
