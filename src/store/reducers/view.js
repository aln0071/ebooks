import { SET_CURRENT_VIEW } from '../actions/types';

const initialState = 'bookView';
// const initialState = 'editorView';

const view = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return String(action.payload);
    default:
      return state;
  }
};

export default view;
