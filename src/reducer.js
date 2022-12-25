export const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: true,
  screenSize: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGlE":
      return { ...state, activeMenu: !state.activeMenu };
    case "handleClick": //chat
      return {
        ...state,
        chat: action.value === "chat" ? true : false,
        cart: action.value === "cart" ? true : false,
        userProfile: action.value === "userProfile" ? true : false,
        notification: action.value === "notification" ? true : false,
      };
    case "resize":
      if (action.size <= 900) {
        return {
          ...state,
          screenSize: action.size,
          activeMenu: false,
        };
      } else {
        return {
          ...state,
          screenSize: action.size,
          activeMenu: true,
        };
      }

    case "SIDEBAR_CLOSE":
      return {
        ...state,
        activeMenu: false,
      };
    default:
      return state;
  }
};
