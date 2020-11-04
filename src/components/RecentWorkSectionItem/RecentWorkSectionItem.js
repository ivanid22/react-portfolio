import React from 'react';
import style from './RecentWorkSectionItem.module.scss';

const RecentWorkSectionItem = ({ projectInfo, reversed }) => {

  const { imageUrl, projectName, projectSummary } = projectInfo;

  return (
    <div className={style.itemContainer}>
      <div className={`col-12 col-md-8 ${reversed ? 'order-md-2' : undefined} ${style.pictureContainer}`}>
        <img src={imageUrl} alt="Project preview" className={style.projectImg} />
      </div>
      <div className={`col-12 col-md-4 ${reversed ? 'order-md-1' : undefined} ${style.infoContainer}`}>
        <h2 className={style.infoTitle}> {projectName} </h2>
        <p className={style.inforSummary}> {projectSummary} </p>
      </div>
    </div>
  )
};

export default RecentWorkSectionItem;
