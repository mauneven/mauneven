import React from "react";
import FirstImpression from "../components/me/FirstImpression";
import Experience from "../components/me/Experience";
import Projects from "../components/me/Projects";
import Skills from "../components/me/Skills";
import EducationAndCertifications from "../components/me/EducationAndCertifications";

const page = () => {
  return (
    <div>
      <div id="home">
        <FirstImpression />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <EducationAndCertifications />
      </div>
    </div>
  );
};

export default page;
