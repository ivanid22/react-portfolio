import React from "react";
import style from "./RecentWorkSection.module.scss";
import quickGameReviewsImage from '../../assets/quick-game-reviews.png';
import jsAsteroidsImage from '../../assets/jsAsteroids.PNG';
import reactStocksInfoImage from '../../assets/react-stocks-info.PNG'
import RecentWorkSectionItem from "../RecentWorkSectionItem/RecentWorkSectionItem";

const reactStocksInfo = {
  imageUrl: reactStocksInfoImage,
  projectName: 'React Stocks Info',
  projectSummary: 
    `A React/Redux web application that displays real-time information on financial stocks.`,
  projectDescription: 
    `
    ReactStocksInfo is a web application built with React/Redux, that displays information about financial stocks.
    It fetches data from the FinancialModelingPrep public API in real time and organizes it in a simple mobile-friendly
    design. The user can search for a specific company to get more detailed information about it. The user can also filter
    the search results by stock exchange.  
    `,
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
  projectDescription: 
    `
      jsAsteroids is a browser game developed in javascript with the game development library "Phaser".
      Its design is inspired by the classic video game "Asteroids", and aims to reproduce that classic
      arcade gameplay experience on the browser.
      The game also keeps track of the top 10 best scores through a specialized API.
    `,
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
  projectDescription: 
    `
    Quick Game Reviews is a site where users can write and share video game reviews.
    The app also implements social features such as being able to follow other users, and liking posts.
    `,
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
    <main className={style.sectionContainer} id="recentWorkSectionContainer">
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
    </main>
  );
};

export default RecentWorkSection;
