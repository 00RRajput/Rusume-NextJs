
import React from "react";
const { renderToString } = await import("react-dom/server");

import About from "@/app/components/about";
import Resume from "@/app/components/resume";
import SkillsForPdf from "@/app/components/skills-for-pdf";

export const renderPdf= async (documentData, userData) => {
  return renderToString(
    <>
        <About /> 
        <Resume/>
        <SkillsForPdf/>
    </>
  );
};