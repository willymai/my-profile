import React, { Component } from "react";
import { Row, Col } from "antd";
import Sidebar from "../components/profile/Sidebar";
import Detail from "../components/profile/Detail";
import { SidebarMenu } from "../constants";
import { onChangeSidebar } from "../redux/actions/common";
import { connect } from "react-redux";
import Header from "../components/profile/Header";

class Profile extends Component {
  componentDidMount() {
    const {
      location: { hash },
    } = this.props;
    if (!!hash && Object.values(SidebarMenu).indexOf(hash.substr(1)) !== -1) {
      this.props.onChangeSidebar(hash.substr(1));
    }
  }

  render() {
    return (
      <div className="profile">
        <Header />
        <div className="container">
          <Row gutter={15}>
            <Col md={6}>
              <Sidebar />
            </Col>
            <Col md={18} xs={24}>
              <Detail />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), { onChangeSidebar })(Profile);
