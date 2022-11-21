import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { CameraReels } from "react-bootstrap-icons";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between px-2 mb-2">
      <Navbar.Brand href="/" className="d-flex">
        <CameraReels width="25" height="25" className="me-2" />
        Search movies in database
      </Navbar.Brand>
      <Form className="d-flex flex-fill">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="secondary">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavigationBar;
