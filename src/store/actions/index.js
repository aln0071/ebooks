import {
  SET_CURRENT_VIEW,
  SET_PAGE,
  SET_PAGE_DATA,
  SET_PAGE_ID,
  SET_PAGE_TITLE,
  SET_PAGE_HTML,
  RESET_PAGE_DATA,
} from './types';

export const setCurrentView = (view) => ({
  type: SET_CURRENT_VIEW,
  payload: view,
});

export const setPage = (pageDetails) => ({
  type: SET_PAGE,
  payload: pageDetails,
});

export const setPageData = (data) => ({
  type: SET_PAGE_DATA,
  payload: data,
});

export const setPageTitle = (title) => ({
  type: SET_PAGE_TITLE,
  payload: title,
});

export const setPageId = (id) => ({
  type: SET_PAGE_ID,
  payload: id,
});

export const setPageHtml = (html) => ({
  type: SET_PAGE_HTML,
  payload: html,
});

export const resetPageData = () => ({
  type: RESET_PAGE_DATA,
});
