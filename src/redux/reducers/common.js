import { SidebarMenu } from "../../constants";

const INITIAL_STATE = {
  key: SidebarMenu.About
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_SIDEBAR":
      return {
        ...state,
        key: action.payload
      }
  
    default:
      return state;
  }
}