
import React, { useState } from 'react';
import TextBlock from "./TextBlock";
import styles from "../styles/Candidate.module.scss";
import classNames from "classnames"
import Image from 'next/image'

function Candidate({ data }) {

  return (
    <li className={`${styles.candidate}`}>
      <div className={classNames(styles.avatar, data.verified ? styles.verified : "")}>
        {data.imgUrl != null ? (
          <img src={data.imgUrl} alt="Candidate photo" />
        ) : (
          <img src="/img/blank-img.png" alt="No photo" />
        )}
      </div>
      <h4>{data.name}
        {data.verified && (
          <img className={styles.star} src="/svg/star-badge.svg" />
        )}
      </h4>
      <br/>
      <span>{data.position}</span>
      <br/>
      <a href={data.surveyUrl}>My Views</a>
    </li>
  );
}

export default Candidate;
