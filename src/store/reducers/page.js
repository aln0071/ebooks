import {
  createEmptyValue,
  createValueFromString,
} from 'react-rte/lib/RichTextEditor';
import {
  SET_PAGE,
  SET_PAGE_DATA,
  SET_PAGE_ID,
  SET_PAGE_TITLE,
  SET_PAGE_HTML,
  RESET_PAGE_DATA,
} from '../actions/types';

const initialState = {
  id: -1,
  data: createEmptyValue(),
  title: '',
  html: '',
};

const page = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...action.payload,
        data: createValueFromString(action.payload.html, 'html'),
      };
    case SET_PAGE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_PAGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_PAGE_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SET_PAGE_HTML:
      return {
        ...state,
        html: action.payload,
      };
    case RESET_PAGE_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default page;
