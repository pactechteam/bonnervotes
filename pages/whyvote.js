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

          <div>
            <iframe
              src="https://player.vimeo.com/video/705884417?h=a9546228aa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="whyvote.MP4"
              width="640"
              height="480"
            ></iframe>
          </div>
          <p>
            Note, this video comes from our friends over at Citizens Alliance
            for Idaho. You can learn more about them{" "}
            <a href="http://citizensallianceidaho.org/pledge" target="_blank">
              here
            </a>
          </p>
        </div>
      </section>
    </article>
  );
};

export default WhyVotePage;
