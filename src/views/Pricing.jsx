import React from 'react'
import { Banner } from './Pricing/Banner'
import Plan from './Pricing/Plan'
import { Features } from './Pricing/Features'
import { PlanDetails } from './Pricing/PlanDetails'

export const Pricing= () =>  {
  return (
    <>
        <Banner/>
        <Plan/>
        <Features/>
        <PlanDetails/>
    </>
  )
}