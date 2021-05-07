import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Library() {
  return (
    <Accordion>
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
            Kathy Rose
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>
              Kathy Rose Statement: A public use policy defining the EBCL
              entrance requirements, which has been delegated to the Library
              Director, is an abdication of authority. The five member Board of
              Trustees best serves its constituents when there is diversity of
              opinions to decide library issues. Currently, a single person, the
              Library Director, has been given unbridled authority. She is
              allowed to criminally trespass public taxpayers who fund the
              operation of the library, for simply not wearing a face mask. Her
              recently published statements demonstrate her view of the
              collective over individual liberty. This policy is suppression,
              infringement, and discrimination, and it must be terminated. The
              mission of a public library is to provide free and open access to
              a broad range of materials and services to people of all ages and
              backgrounds. During their April board meeting, instead of voting
              to terminate the policy, the trustees admitted they were ignorant
              of the science by deciding they needed more information. After
              more than a year…they need more information? There is another
              challenge on the horizon. Cancel culture is an evolving movement
              to re-define history and who we are. The pressure to participate
              in the modern day book burning is evident in this country. I have
              no doubt it will begin to affect our own library and they may
              capitulate by removing books such as the children’s favorite Dr.
              Seuss books. This type of censorship should never be accepted in
              North Idaho. I offer to the EBCL Trustee Board constructive advice
              and un-repenting conservative philosophy that represents, at the
              very least, a majority of liberty and freedom voters of the EBCL
              District. We need to get the rural residents out to vote because
              we out-number the city. Vote May 18th!
            </p>
            <u>Biographical Information:</u>
            <ul>
              <li>
                Served as Vice President, Bonner County Republican Women, Inc.,
                2015-2017.
              </li>
              <li>
                Currently serving as Secretary of the Bonner County Republican
                Central Committee since 2016.{" "}
              </li>
              <li>Past experience as an elected School Board Trustee </li>
              <li>
                2 years as a small business owner • Married, two daughters,
                Stephanie 30, Jessica 27
              </li>
              <li>Resident of Bonner County for 7 years</li>
              <li>Bachelor’s Degree from American International College.</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Library;
