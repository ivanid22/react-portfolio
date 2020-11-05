import React from "react";
import style from "./RecentWorkSection.module.scss";
import image from "../../logo.svg";
import RecentWorkSectionItem from "../RecentWorkSectionItem/RecentWorkSectionItem";

const testProject = {
  imageUrl: image,
  projectName: "Test project",
  projectSummary:
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. including versions of Lorem Ipsum. including versions of Lorem Ipsum.",
  techStack: [
    'html',
    'Ruby on Rails',
    'css',
  ],
};

const RecentWorkSection = () => {
  return (
    <div className={style.sectionContainer}>
      <div className={style.sectionHeading}>
        <h1> My recent work </h1>
        <RecentWorkSectionItem projectInfo={testProject} />
        <RecentWorkSectionItem projectInfo={testProject} reversed />
        <RecentWorkSectionItem projectInfo={testProject} />
      </div>
    </div>
  );
};

export default RecentWorkSection;
