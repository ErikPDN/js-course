import * as types from '../types';

const initialState = {
  buttonClicked: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCCESS:
      return {
        ...state,
        buttonClicked: !state.buttonClicked,
      };
    case types.BUTTON_CLICKED_REQUEST:
      console.log('Requesting');
      return state;

    case types.BUTTON_CLICKED_FAILURE:
      console.log('Failure');
      return state;

    default:
      return state;
  }
}
