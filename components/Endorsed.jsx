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
        {! data.missingImg ? (
          <img src={`/img/candidates/${data.slug}.jpg`} onError={(e) => { e.target.onerror = null; e.target.src = "/img/blank-img.png" }} alt="Candidate photo" />
        ) : (
          <img src="/img/blank-img.png" alt="No photo" />
        )}
      </div>

      <h4 className={"star-badge"}>{data.name}<span>&nbsp;</span></h4>
      <span>{data.position}</span><br />

      <Link href={data.surveyUrl}>
        <a target="_blank">My Values</a>
      </Link>

    </li>
  );
}

export default Endorsed;
