import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/actions/common";
import classnames from "classnames";
// export default class Header extends Component {
//   render() {
//     return (
//       <div className="header">
//         <div className="header__inner">
//           <a className="header__logo" href="/">W</a>
//           <div className="header__burger-menu">
//             <span />
//             <span />
//             <span />
//             <span />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

const Header = () => {
  const commonStore = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const _handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="header">
      <div className="header__inner">
        <a className="header__logo" href="/">
          W
        </a>
        <div
          className={classnames("header__burger-menu", {
            open: commonStore.showMenu,
          })}
          onClick={_handleToggleMenu}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default Header;
