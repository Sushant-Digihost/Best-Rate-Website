import React from "react";
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
import { Innovation } from "./Home/Innovation";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExpertyBuild />
      <ReadyToExplore />
      <StartSuccess />
      <Innovation />
      {/* <EcosystemBuild /> */}
      <VouchSlider />
      <OneclickCta />
      <PremiumElement />
      <HomeBlog />
      <Pricing_Plan />
    </div>
  );
};

export default Home;
