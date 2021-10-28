import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '../styles/Endorsed.module.scss';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Endorsed
 */
function Endorsed({ data }) {

  return (
    <li className={`${styles.endorsed} grid-item`}>

      <div className={classNames(styles.avatar)}>
        {data.imgUrl != null ? (
          <Image src={data.imgUrl} alt="Candidate photo" />
        ) : (
          <img src="/img/blank-img.png" alt="No photo" />
        )}
      </div>

      <h4>{data.name}</h4>
      <span>{data.position}</span><br />

      <Link href={data.surveyUrl}>
        <a target="_blank">My Values</a>
      </Link>

    </li>
  );
}

export default Endorsed;
