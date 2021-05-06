import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Library() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Jalon Peters{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              The divisive language coming from a certain organization with
              regard to the May 18 library and hospital board elections is
              telling. Using words like “extremist” to describe those of us who
              live our faiths and care about our constitutional rights is
              alienating. Further, those who impose mask mandates and then
              participate in Q-and-As for local organizations mask-less might
              take a good long look in the hypocrite mirror. But what’s more
              telling is that messages like this are a solid indication that our
              local boards — which have the power to run levies that raise our
              taxes — are not balanced. They are dominated by group thinkers
              with little to no diversity of thought. And that’s why Jalon
              Peters is running for a seat on the library board. Jalon
              understands that our area is a hub of diverse thought, and that we
              have a long history of standing up to those who would trample on
              our rights. Jalon will bring your voice to a board that’s lost its
              way. While turning away those of us who cannot or will not wear
              masks to utilize services our tax dollars pay for, rhetoric used
              to describe us flows freely from these same lips, making for a
              library that’s inclusive of only those who comply with its
              dictates. Please vote Jalon Peters on May 18. He will bring
              balance to an unbalanced library board. --Jason Giddings
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            Cathy Rose
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>
              Employment history: Small Business Entrepreneur, 22 years;
              Document Control Specialist, 2 years Public Office: Elected as
              School Board Trustee Professional: Serving as Secretary of the
              Bonner County Republican Central Committee since 2016. Served 2
              years as Vice-President, Bonner County Republican Women, Inc.
              Treasurer for the Committee to Elect Bill Gunn – US Congressional
              Candidate Like many people, I used to visit the library on a
              frequent basis, when it was open without unlawful restrictions.
              Since the closure and mask mandate policy, I have only visited
              once. People feel unwelcome and do not want to be trespassed from
              their own public library. I feel this policy is discriminatory and
              exclusionary, and needs to be terminated immediately. The library
              will be facing future pressures to surrender to cancel culture. We
              cannot allow this to creep in and take hold in Bonner County. I
              research an issue before making a decision. My beliefs are based
              in Biblical principles and Constitutional law. The library of
              every community is essential to community strength. It should
              bring the community together, not divide it. My experience and
              qualifications will offer a balance and diversity to the East
              Bonner County Library. I appreciate your interest in taking the
              time to understand my background and outlook for the EBCL. I
              humbly ask you to vote for me, Kathy Rose on May18th, or sooner by
              absentee ballot, Thank you!
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Library;
