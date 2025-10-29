import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { GalleryItem } from "../data/items";

type Props = {
  item: GalleryItem;
  showButton?: boolean;
};

export default function MediaCard({ item, showButton = true }: Props) {
  return (
    <Card bg="dark" text="light" className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={item.image}
        alt={item.title}
        style={{ objectFit: "cover", height: 450 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="flex-grow-1">{item.description}</Card.Text>

        {showButton && (
          <div className="d-flex gap-2">
            <Link className="btn btn-primary" to={`/item/${item.id}`}>
              Read more
            </Link>
            {item.more && (
              <a
                className="btn btn-outline-light"
                href={item.more}
                target="_blank"
                rel="noreferrer"
              >
                External
              </a>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
