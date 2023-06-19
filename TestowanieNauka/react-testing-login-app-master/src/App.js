import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from "react-bootstrap";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="Container app-container">
      <Row>
        <Col>
          <h1>React Testing App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Login data-testid="child" />
        </Col>
      </Row>
    </div>
  );
};

export default App;
