import { Container, Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Entertainment Gallery</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="pb-5">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/item/:id" element={<Detail />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Container>
    </>
  );
}
