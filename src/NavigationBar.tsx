import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { CameraReels } from "react-bootstrap-icons";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Container from "react-bootstrap/Container";

interface NavigationBarProps {
  setQueryText: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationBar = ({ setQueryText }: NavigationBarProps) => {
  const [text, setText] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.warn(text);
  };
  const onClickHandler = () => {
    console.warn(text);
    setQueryText(text);
  };
  const onKeyDownHandler = (key: KeyboardEvent<HTMLInputElement>) => {
    console.warn({ key });
    if (key.code === "Enter") {
      setQueryText(text);
    }
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between flex-wrap px-2 mb-2"
    >
      <Navbar.Brand href="/" className="d-flex ">
        <CameraReels width="25" height="25" className="me-2" />
        Search movies in database
      </Navbar.Brand>
      <div className="d-flex flex-fill">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <Button type="submit" variant="secondary" onClick={onClickHandler}>
          Search
        </Button>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
