const initialState = {
  buttonClicked: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      return {
        ...state,
        buttonClicked: true,
      };
    default:
      return state;
  }
}
