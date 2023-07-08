import React, { useState } from "react";
import classNames from "classnames";

import styles from "../styles/Endorsed.module.scss";
import Image from "next/image";
import Link from "next/link";

/**
 * Endorsed
 */
function Endorsed({ data }) {
  const fileType = data.isPng == undefined ? "jpg" : "png";

  return (
    <li className={`${styles.endorsed} grid-item`}>
      <div className={classNames(styles.avatar)}>
        {data.slug ? (
          <Image
            src={`/img/candidates/${data.slug}.${fileType}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/img/blank-img.png";
            }}
            alt="Candidate photo"
            width="600px"
            height="750px"
          />
        ) : (
          <Image
            src="/img/blank-img.png"
            width="600px"
            height="750px"
            alt="No photo"
          />
        )}
      </div>

      <h4 className={"checkmark"}>
        {data.name}
        <span>&nbsp;</span>
      </h4>
      <span>{data.position}</span>
      <br />

      {data.surveyUrl !== undefined && data.surveyUrl !== "" && (
        <div>
          <Link href={data.surveyUrl}>
            <a target="_blank">My Views</a>
          </Link>
        </div>
      )}
      {data.website !== undefined && data.website !== "" && (
        <Link href={data.website}>
          <a target="_blank">My Website</a>
        </Link>
      )}
      {data.facebook !== undefined && data.facebook !== "" && (
        <div>
          <Link href={data.facebook}>
            <a target="_blank">Facebook</a>
          </Link>
        </div>
      )}
      {data.moreInformation !== undefined && data.moreInformation !== "" && (
        <div>
          <Link href={data.moreInformation}>
            <a>More information</a>
          </Link>
        </div>
      )}
    </li>
  );
}

export default Endorsed;
