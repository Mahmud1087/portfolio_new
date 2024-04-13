interface StateType {
  isDarkMode: boolean;
}

enum ActionType {
  TOGGLE_THEME,
}

interface Action {
  type: ActionType;
}

const initialStates: StateType = { isDarkMode: false };

export const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      throw new Error('Error');
  }
};
