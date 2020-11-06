import React from "react";
import style from "./RecentWorkSection.module.scss";
import image from "../../logo.svg";
import quickGameReviewsImage from '../../assets/quick-game-reviews.png';
// import jsAsteroidsImage from '../../assets/jsAsteroids.PNG';
// import reactStocksInfoImage from '../../assets/react-stocks-info.PNG'
import RecentWorkSectionItem from "../RecentWorkSectionItem/RecentWorkSectionItem";

const testProject = {
  imageUrl: image,
  projectName: "Test project",
  projectSummary:
    `It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. including versions of Lorem Ipsum. including versions of Lorem Ipsum.`,
  techStack: [
    'html',
    'Ruby on Rails',
    'css',
  ],
  liveUrl: 'localhost:3000',
  repoUrl: 'localhost:3000',
};

const quickGameReviews = {
  imageUrl: quickGameReviewsImage,
  projectName: 'Quick Game Reviews',
  projectSummary: `Placeholder summary for the project`,
  techStack: [
    'html',
    'Ruby on Rails',
    'css',
  ],
  liveUrl: 'https://quick-game-reviews.herokuapp.com',
  repoUrl: 'https://github.com/ivanid22/quick-game-reviews',
}

const RecentWorkSection = () => {
  return (
    <div className={style.sectionContainer}>
      <div className={style.flareOne} />
      <div className={style.flareTwo} />
      <div className={style.flareThree} />
      <div className={style.flareLgOne} />
      <div className={style.flareLgTwo} />
      <div className={style.flareLgThree} />
      <div className={style.sectionHeading}>
        <h1> My recent work </h1>
        <RecentWorkSectionItem projectInfo={testProject} />
        <RecentWorkSectionItem projectInfo={quickGameReviews} reversed />
        <RecentWorkSectionItem projectInfo={testProject} />
      </div>
    </div>
  );
};

export default RecentWorkSection;
