import { useParams, Link } from "react-router-dom";
import { items } from "../data/items";
import { Row, Col } from "react-bootstrap";
import MediaCard from "../components/MediaCard";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const item = items.find((i) => i.id === id); 

  if (!item) {
    return (
      <>
        <p>Item not found.</p>
        <Link to="/" className="btn btn-outline-light mt-2">← Back to gallery</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/" className="btn btn-outline-light mb-3">
        ← Back to gallery
      </Link>

      <Row className="g-4 align-items-start">
        <Col xs={12} md={5} lg={4}>
          <MediaCard item={item} showButton={false} />
        </Col>
        <Col xs={12} md={7} lg={8}>
          <h2>{item.title}</h2>
          <p>
            This page can include longer info, trivia, or links about the selected card.
            The gallery’s cards are reusable — here we hide the buttons and provide
            richer text on the side.
          </p>
          {item.more && (
            <a
              href={item.more}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Learn more
            </a>
          )}
        </Col>
      </Row>
    </>
  );
}
