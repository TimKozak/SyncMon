import {
  SET_SELECT_MODE,
  CLEAR_SELECT_MODE,
  ADD_TO_SELECTED,
  REMOVE_FROM_SELECTED,
  CLEAR_SELECTED,
  SET_THEME,
} from "./types";

export const setSelectMode = () => {
  return { type: SET_SELECT_MODE };
};

export const clearSelectMode = () => {
  return { type: CLEAR_SELECT_MODE };
};

export const addToSelected = (sync) => {
  return { type: ADD_TO_SELECTED, payload: sync };
};

export const removeFromSelected = (sync) => {
  return { type: REMOVE_FROM_SELECTED, payload: sync };
};

export const clearSelected = () => {
  return { type: CLEAR_SELECTED };
};

export const searchSyncs = (text) => {
  return;
};

export const setTheme = (theme) => {
  return { type: SET_THEME, payload: theme };
};
