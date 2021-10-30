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
  const noResponse = data.noResponse;

  return (
    <li className={`${styles.candidate} grid-item`}>

      <div className={classNames(styles.avatar, isEndorsed ? styles.endorsed : '')}>
        {! data.missingImg ? (
          <img src={`/img/candidates/${data.slug}.jpg`} onError={(e) => { e.target.onerror = null; e.target.src = "/img/blank-img.png" }} alt="Candidate photo" />
          // <object data="/img/blank-img.png" type="image/png" style={{width: "100%"}}>
          //   <img src={`/img/candidates/${data.slug}.jpg`} alt="Photo" />
          // </object>
        ) : (
          <img src="/img/blank-img.png" alt="No photo" />
        )}
      </div>

      <h4 className={data.endorsed ? "star-badge" : ''}>{data.name}<span>&nbsp;</span></h4>
      <span>{data.position}</span><br/>

      <Link href={data.surveyUrl}>
        <a className={classNames(
          isEndorsed ? styles.endorsedLink : '',
          noResponse ? styles.noResponseLink : '',
          )} target="_blank">
          {noResponse ? "No Comment" : "My Views"}
        </a>
      </Link>

    </li>
  );
}

export default Candidate;
