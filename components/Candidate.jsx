import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '../styles/Candidate.module.scss';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Candidate
 */
function Candidate({ data }) {
  const isEndorsed = data.endorsed;

  return (
    <li className={`${styles.candidate} grid-item`}>

      <div className={classNames(styles.avatar, isEndorsed ? styles.endorsed : '')}>
        {data.imgUrl != null ? (
          <Image src={data.imgUrl} alt="Candidate photo" />
        ) : (
          <img src="/img/blank-img.png" alt="No photo" />
        )}
      </div>

      <h4>{data.name}</h4>
      <span>{data.position}</span><br />

      <Link href={data.surveyUrl}>
        <a target="_blank">My Views</a>
      </Link>

    </li>
  );
}

export default Candidate;
