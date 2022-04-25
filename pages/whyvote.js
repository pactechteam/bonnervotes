import React from "react";
import styles from "../styles/pages/Index.module.scss";
const WhyVotePage = (props) => {
  return (
    <article className={styles.locationsPage}>
      <section className="body-copy">
        <div className="content">
          <p>
            Did you know Conservatives only vote in the Primaries 5 to 35% of
            the time, while Democrats vote 60% of the time? Yet, there are twice
            as many of us. If we vote, we win every time! Vote for Idaho True
            Conservatives candidates on May 17th!{" "}
          </p>
          <p>“The ballot is stronger than the bullet.” President Lincoln</p>
        </div>
      </section>
    </article>
  );
};

export default WhyVotePage;
