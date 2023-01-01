export const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: true,
  screenSize: undefined,
  currentColor: "#1A97F5",
  theme: "Light",
  themeSetting: false,
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
    case "handleClose": //chat
      return {
        ...state,
        [action.value]:false
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

    case "CHANGE_THEME_COLOR":
      return {
        ...state,
        currentColor: action.color,
      };
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.theme,
      };
    case "THEME_SETTING":
      return {
        ...state,
        themeSetting: action.theme,
      };

    default:
      return state;
  }
};
