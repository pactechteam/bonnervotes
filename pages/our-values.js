import styles from "../styles/pages/OurValues.module.scss";

/**
 * OurValues Page
 */
export default function OurValues() {
  return (
    <article className={styles.ourValuesPage}>
      <section className="body-copy">
        <div className="content">
          The following video explains more about our movement
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/876670916?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="About PAC"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <h1>We believe in these core truths:</h1>
          <p>
            <strong>Triune God</strong> — The Father, His only Son Jesus Christ,
            and the Holy Spirit; as described in the Holy Bible is our true
            sovereign.
          </p>
          <p>
            <strong>Imago Dei</strong> — We are all individually created in
            God’s image, so we soundly reject secular humanism, collectivism,
            and advocates or adherents to the supremacy of one group of people
            over another, such as black nationalists, white supremacists,
            socialists, communists, members of masonic and similar orders,
            practitioners of identity politics, et cetera.
          </p>
          <p>
            <strong>Right to Life</strong> — Individual life is sacred.
          </p>
          <p>
            <strong>Liberty</strong> — Individual liberty is the cornerstone of
            our republic, which we must defend with our lives, our fortunes, and
            our sacred honor.
          </p>
          <p>
            <strong>Individual Rights</strong> — Liberty is upheld via a series
            of just negative rights, in particular (but not limited to): freedom
            of speech, freedom of association, freedom in religion, the right to
            bear arms, the right to acquire and own property, and the right to
            engage in the pursuit of happiness.
          </p>
          <p>
            <strong>American Exceptionalism</strong> — The United States of
            America was founded on principles endowed by our Creator.
          </p>
          <p>
            <strong>The Constitution</strong> - We have been gifted a nation
            built upon law based in The Constitution, which must be interpreted
            and implemented as it was originally intended by the Founding
            Fathers.
          </p>
          <p>
            <strong>Justice</strong> — The Constitution and Bill of Rights was
            designed to enshrine and protect sacred negative rights to be
            equally administered, free of judicial activism.
          </p>
          <p>
            <strong>Marriage</strong> — The union of one man and one woman is
            the cornerstone of family, community, and nation; thus it is
            sacrosanct.
          </p>
          <p>
            <strong>Personal Responsibility</strong> — We must accept the full
            mantle of self-governance and accept our own successes and failures.
          </p>
          <p>
            <strong>State’s Rights</strong> — Our republic consists of a
            confederation of individual States in order to protect against the
            potential tyranny of a federal government, and the authority of a
            centralized federal government should therefore be strictly and
            carefully limited.
          </p>
          <p>
            <strong>Fiscal Responsibility</strong> — Government at all levels
            should adhere to the principles of low taxation, maintaining a
            balanced budget, and opposing pork barrel spending so as not to
            infringe upon the liberty of individuals.
          </p>
        </div>
      </section>
    </article>
  );
}
