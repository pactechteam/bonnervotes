import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Library() {
  return (
    <Accordion>
      <Card>
       <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            Dolores Glass
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              Dodie Glass has a Master's degree in Nursing, a Bachelor's of
              Science in Nursing, and has been in the medical field for
              approximately 25 years. She has worked at rural hospitals before
              and worked at Bonner General Hospice. Glass has great depth of
              knowledge regarding rural medical needs and the structures needed
              to provide the same. She is a staunch conservative and is not an
              adherent of mandating mask wearing. She brings a wealth of
              experiential gravitas to the board. The only new board candidates
              who have applicable and valuable experience are Dodie Glass and
              Jessie Peters. Dodie is running for this position as her Christian
              beliefs have convicted her to be involved. Please support Dodie
              Glass for this board position as she will look out for the best
              interests of Bonner County residents.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            Jessie Peters{" "}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>
              It’s a universal notion that taxpayers don’t want our hard-earned
              tax dollars wasted and that we desire transparency in budgeting
              and spending. But it appears we have neither with the current
              hospital district board. And that’s why we need to refresh it.
              Jessie Peters works as a family nurse practitioner, and with her
              10-plus years of experience in both the healthcare field and with
              helping manage large budgets for a non-profit, Jessie will bring a
              fresh eye to fiscal responsibility and a much-needed focus on the
              healthcare of our rural areas, both of which are conspicuously
              lacking. In case you weren’t aware, the hospital district board is
              a “taxing district” with the power to run levies that increase our
              property taxes. And it has done so. And while we all want to
              support area healthcare, we also want to know both where our tax
              dollars are flowing and if they’re being spent responsibly. And
              that’s where Jessie Peters, who wants to ensure our tax dollars
              are being spent in a way directly improving the health of our
              communities, promises to place her attention. Please vote Jessie
              Peters on May 18 and help bring transparency and fiscal
              responsibility to our hospital district board. --Lisa Keseloff
              Bonner B
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Library;
