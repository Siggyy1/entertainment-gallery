import { Row, Col } from "react-bootstrap";
import MediaCard from "../components/MediaCard";
import { items } from "../data/items";

export default function Gallery() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {items.map((item) => (
        <Col key={item.id}>
          <MediaCard item={item} />
        </Col>
      ))}
    </Row>
  );
}
