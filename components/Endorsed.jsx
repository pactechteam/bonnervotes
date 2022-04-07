import React, { useState } from "react";
import classNames from "classnames";

import styles from "../styles/Endorsed.module.scss";
import Image from "next/image";
import Link from "next/link";

/**
 * Endorsed
 */
function Endorsed({ data }) {
  return (
    <li className={`${styles.endorsed} grid-item`}>
      <div className={classNames(styles.avatar)}>
        {!data.missingImg ? (
          <Image
            src={`/img/candidates/${data.slug}.jpg`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/img/blank-img.png";
            }}
            alt="Candidate photo"
            width="600px"
            height="750px"
          />
        ) : (
          <Image src="/img/blank-img.png" alt="No photo" />
        )}
      </div>

      <h4 className={"checkmark"}>
        {data.name}
        <span>&nbsp;</span>
      </h4>
      <span>{data.position}</span>
      <br />

      <Link href={data.website}>
        <a target="_blank">Website</a>
      </Link>
    </li>
  );
}

export default Endorsed;
