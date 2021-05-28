import { SET_CURRENT_VIEW } from './types';

export const setCurrentView = (view) => ({
  type: SET_CURRENT_VIEW,
  payload: view,
});
