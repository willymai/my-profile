import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { SidebarMenu } from "../../constants";
// import MeImage from "../../assets/images/me.jpg";
import MeImage2 from "../../assets/images/me_2.jpg";
import { onChangeSidebar } from "../../redux/actions/common";
import { Link } from "react-router-dom";

const MENUS = [
  {
    icon: "fas fa-user-edit",
    text: SidebarMenu.About,
  },
  {
    icon: "fas fa-address-card",
    text: SidebarMenu.Resume,
  },
  {
    icon: "fas fa-image",
    text: SidebarMenu.Portfolio,
  },
  {
    icon: "fas fa-map-marked-alt",
    text: SidebarMenu.Contact,
  },
];

class Sidebar extends Component {
  _handleClick = (value) => {
    this.props.onChangeSidebar(value);
  };
  render() {
    const { common } = this.props;
    return (
      <div className={classnames("sidebar", { "show-menu": common.showMenu })}>
        <div className="sidebar__img">
          <img src={MeImage2} alt="" />
        </div>
        <div className="sidebar__menu">
          {MENUS.map((menu) => (
            <Link
              to={`/#${menu.text}`}
              className={classnames("sidebar__menu__item", {
                active: common.key === menu.text,
              })}
              key={menu.text}
              onClick={(e) => this._handleClick(menu.text)}
            >
              <i className={menu.icon} />
              {menu.text}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ common }) => ({
  common,
});

const mapDispatchToProps = {
  onChangeSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
