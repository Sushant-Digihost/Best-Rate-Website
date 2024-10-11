import React from "react";
import {
  BroweThemesBtn,
  DomainName,
  ExpertyBuild,
  Hero,
  ReadyToExplore,
  StartSuccess,
} from "../components/HomeComponents";

const Home = () => {
  return (
    <>
      <BroweThemesBtn />
      <Hero />
      <DomainName />
      <ExpertyBuild />
      <ReadyToExplore />
      <StartSuccess />
    </>
  );
};

export default Home;
