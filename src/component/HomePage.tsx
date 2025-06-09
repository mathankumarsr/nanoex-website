import React from "react";
import { BlogSection } from "./BlogSection";
import { CallToActionSection } from "./CallToActionSection";
import { ContentWrapperSection } from "./ContentWrapperSection";
import { FeaturesOverviewSection } from "./FeaturesOverviewSection";
import { HeroSection } from "./HeroSection";
import { IntroductionSection } from "./IntroductionSection";
import { MainContentSection } from "./MainContentSection";
import { NavigationSection } from "./NavigationSection";
import { SidebarSection } from "./SidebarSection";
import { StatisticsSection } from "./StatisticsSection";
import { TeamSection } from "./TeamSection";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full bg-black overflow-x-hidden">
      <NavigationSection />
      <ContentWrapperSection />
      <MainContentSection />
      <HeroSection />
      <SidebarSection />
      <IntroductionSection />
      <StatisticsSection />
      <FeaturesOverviewSection />
      <TeamSection />
      <BlogSection />
      <CallToActionSection />
    </div>
  );
};
export default HomePage;