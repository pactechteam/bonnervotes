import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Library() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Dolores Glass
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              Dodie Glass has she has a masters in nursing for approx 25 years.
              She has worked at rural hospitals before and worked @ Bonner
              General Hospice and has great depth of knowledge regarding rural
              medical needs and the structures to provide same. She is a staunch
              conservative and is not an adherent of masking. She would bring a
              wealth of experiential gravitas to the board. The Republican
              central committee pick has zero experience in healthcare and has
              really no track record that is applicable to this position and is
              also in favor of a consitutional convention that would destroy our
              country. Dodie is running for this position is her christian
              beliefs have led her to be involved. Please support Dodie Glass
              for this board position as she will look out for the best
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