import { SidebarMenu } from "../../constants";

const INITIAL_STATE = {
  key: SidebarMenu.About,
  showMenu: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_SIDEBAR":
      return {
        ...state,
        key: action.payload,
      };
    case "TOGGLE_MENU":
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    default:
      return state;
  }
};
