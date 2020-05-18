import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import Sidebar from "../components/profile/Sidebar";
import Detail from "../components/profile/Detail";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container">
          <Row gutter={15}>
            <Col md={6}>
              <Sidebar />
            </Col>
            <Col md={18}>
              <Detail />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
