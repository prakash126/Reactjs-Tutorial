import React from "react";
import HeaderSection from "./header";
import SkillSection from "./skill";

import ProjectSection  from './project'

import "./style.css";

import TeamSection from './teams';
import CarouselSection from './carousel';
import FooterSection from './footer';

const App = ()=>(
    <div>
        
        <HeaderSection />
        <SkillSection />
        
        <ProjectSection />
        <TeamSection />
        <CarouselSection />
        <FooterSection />
    </div>
);

export default App;