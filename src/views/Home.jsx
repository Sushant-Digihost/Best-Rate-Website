import React from "react";
import BrowseBtn from "./Home/BrowseBtn";
import HeroSection from "./Home/HeroSection";
import ExpertyBuild from "./Home/ExpertyBuild";
import ReadyToExplore from "./Home/ReadyToExplore";
import StartSuccess from "./Home/StartSuccess";
import EcosystemBuild from "./Home/EcosystemBuild";
import VouchSlider from "./Home/VouchSlider";
import OneclickCta from "./Home/OneclickCta";
import HomeBlog from "./Home/HomeBlog";
import Pricing_Plan from "./Home/Pricing_Plan";
import CtaHome from "./Home/CtaHome";
import { PremiumElement } from "./Home/PremiumElement";



const Home = () => {
  return (
    <>
      <BrowseBtn/>
      <HeroSection />
      <ExpertyBuild />
      <ReadyToExplore />
      <StartSuccess />
      <EcosystemBuild />
      <VouchSlider />
      <OneclickCta />
      <PremiumElement/>
      <HomeBlog />
      <Pricing_Plan />
      <CtaHome />
    </>
  );
};

export default Home;
