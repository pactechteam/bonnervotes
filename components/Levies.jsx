import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Library() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Against
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              The Bonner County Republican Central Committee researched the
              County’s proposed Solid Waste bond and recommended against it
              because it lacks clarity and transparency for incurring debt for a
              decade or more.
            </p>
            <ul>
              <li>
                In early April, BCRCC submitted a list of eight specific
                questions to County Commissioners asking for clarification. No
                answer, written or verbal, was received, and none of the
                Commissioners attended the April BCRCC meeting.{" "}
              </li>
              <li>
                {" "}
                BOCC chairman McDonald now declares himself “baffled” by BCRCC’s
                stance against this bond, which he claims will prevent
                “dramatically higher fees” because of future inflation.
                Actually, Commissioners already dramatically raised solid waste
                fees by 62% in September 2019, from $115 to $185, for the very
                infrastructure improvements they now insist require a bond. By
                their own verbal admission, “overages” were built into the
                increase.
              </li>
              <li>
                The ballot lists the reason for the bond as having to meet
                unspecified “federal requirements”. The reason given by McDonald
                this week: to meet Idaho DEQ requirements.{" "}
              </li>
              <li>
                {" "}
                In 2019, the plan was to raise $8,733,700 in 10 years. Millions
                have already been collected. The bond would add $786,423 in
                interest, to be repaid from the solid waste fees on your
                property tax bill, with a payoff time of 10 years or less if you
                believe the ballot, or as long as 15 years, if you believe the
                County’s website.{" "}
              </li>
              <li>
                {" "}
                McDonald claims that the solid waste issue has been publicized
                since 2019. You would be hard pressed to find anyone who has
                been informed on this issue. So within the last three weeks,
                three public hearings were hastily scheduled, attended by just a
                few people.
              </li>
              <li>
                {" "}
                McDonald fails to mention that federal ARPA funds of $8.8
                million, specifically for water, sewer and broadband
                infrastructure, will be discussed at a multiagency meeting next
                week, after the election, and solid waste improvement likely
                qualifies as “infrastructure”. If it does, the County stands to
                gain an infrastructure windfall which, in a public meeting on
                May 12, 2021, Commissioners said would be placed in a “trust”
                for 4- 1/2 years, to be determined for spending at a later time.
                In other words, a “slush fund”. The reasons keep multiplying for
                giving this bond measure a No vote.{" "}
              </li>
            </ul>
            <p>Anita Perry Sandpoint</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Library;
