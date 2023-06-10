import React from 'react';
import About from '@/components/About';
import { ABOUT_INFO, ABOUT_PROJECT, ABOUT_TEAM } from '@/constants/about-us';
import { ABOUT_US } from '@/constants/constants';
import AboutMission from '@/components/About/AboutMission';
import AboutTeam from '@/components/About/AboutTeam';
import AboutProject from '@/components/About/AboutProject';
import Authors from '@/components/Authors';
import { AUTHORS } from '@/constants/authors';
import Join from '@/components/Join';

const AboutPage = () => {
  return (
    <>
      <About heading={ABOUT_US} info={ABOUT_INFO} />
      <AboutMission />
      <AboutTeam content={ABOUT_TEAM} />
      <AboutProject content={ABOUT_PROJECT} />
      <Authors authors={AUTHORS} />
      <Join />
    </>
  );
};

export default AboutPage;
