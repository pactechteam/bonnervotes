import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function Library() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Thomas Fletcher
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              Vote for Thomas Fletcher for the board of Northern Lights. You may
              have noticed campaign signs scattered along the roads from Sagle
              to Athol stating that the NLI employees support the reelection of
              Dave Pemberton. I think it is appropriate for an employee to
              personally endorse a board member. However, for a collective of
              employees to announce to the public their support implies
              something very different. The board of directors represents NLI
              customers, not the employees. Consequently, one of the cardinal
              rules of the relationship between a board of directors and
              management of a company rests in a strict separation of power. It
              would be a conflict of interest for the board members to become
              beholden to the management or employees. Should Dave Pemberton get
              reelected to the board, will he be grateful to the employees for
              their support? When he first ran, I voted for him because he
              promised to get rid of the “old boys” club. Now though, it appears
              one hand is washing the other. Did the board really give him
              permission to use the copyrighted NLI logo on his signage? That
              management has not insisted on the removal of the signs implies at
              least tacit approval. This is why I’m voting for Thomas Fletcher,
              a local business owner who believes in accountability. I love the
              fact that he’s selflessly going to donate all of the money he
              receives for his service on the board to a local charity here in
              the area. --Thomas Leo Bonner B
            </p>
            <Link href="/nli.pdf">
              Click here for Northern Lights information
            </Link>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Library;
