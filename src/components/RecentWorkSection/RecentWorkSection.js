import React from "react";
import style from "./RecentWorkSection.module.scss";
import quickGameReviewsImage from '../../assets/quick-game-reviews.png';
import jsAsteroidsImage from '../../assets/jsAsteroids.PNG';
import reactStocksInfoImage from '../../assets/react-stocks-info.PNG'
import RecentWorkSectionItem from "../RecentWorkSectionItem/RecentWorkSectionItem";
import animateScroll from "react-scroll/modules/mixins/animate-scroll";

const reactStocksInfo = {
  imageUrl: reactStocksInfoImage,
  projectName: 'React Stocks Info',
  projectSummary: 
    `A React/Redux web application that displays real-time information on financial stocks.`,
  techStack: [
    'html',
    'css',
    'javascript',
    'React',
    'Redux',
  ],
  liveUrl: 'https://react-stocks-info.netlify.app',
  repoUrl: 'https://github.com/ivanid22/react-stocks-info',
}

const jsAsteroids = {
  imageUrl: jsAsteroidsImage,
  projectName: "jsAsteroids",
  projectSummary:
    `A Web-based space-shooting game inspired by Asteroids. Built with Phaser.`,
  techStack: [
    'html',
    'Ruby on Rails',
    'css',
  ],
  liveUrl: 'https://js-asteroids.netlify.app/',
  repoUrl: 'https://github.com/ivanid22/js-spaceships',
};

const quickGameReviews = {
  imageUrl: quickGameReviewsImage,
  projectName: 'Quick Game Reviews',
  projectSummary: `A Full-stack web application that lets users post and share video game reviews. Built on Ruby on Rails.`,
  techStack: [
    'html',
    'Ruby on Rails',
    'css',
  ],
  liveUrl: 'https://quick-game-reviews.herokuapp.com',
  repoUrl: 'https://github.com/ivanid22/react-stocks-info',
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
        <RecentWorkSectionItem projectInfo={jsAsteroids} />
        <RecentWorkSectionItem projectInfo={quickGameReviews} reversed />
        <RecentWorkSectionItem projectInfo={reactStocksInfo} />
      </div>
    </div>
  );
};

window.scroll = animateScroll;

export default RecentWorkSection;
