import {
  SET_SELECT_MODE,
  CLEAR_SELECT_MODE,
  ADD_TO_SELECTED,
  REMOVE_FROM_SELECTED,
  CLEAR_SELECTED,
} from "../actions/types";

// Set this inital state object as defult prop for reducer
const initialState = {
  syncs: [
    {
      id: 1,
      system: "OSA 5581C",
      lastUpdateDate: "01.09.2021 00:11",
      updateDates: [],
      fileName: "some_file",
    },
    {
      id: 2,
      system: "NTP 1305",
      lastUpdateDate: "01.09.2021 00:11",
      updateDates: [],
      fileName: "some_file",
    },
    {
      id: 3,
      system: "GFS 44KS",
      lastUpdateDate: "01.09.2021 00:11",
      updateDates: [],
      fileName: "some_file",
    },
  ],
  current: null,
  loading: false,
  error: null,
  select_mode: false,
  selected: [],
};

const syncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECT_MODE:
      return {
        ...state,
        select_mode: true,
      };
    case CLEAR_SELECT_MODE:
      return {
        ...state,
        select_mode: false,
      };
    case ADD_TO_SELECTED:
      return {
        ...state,
        selected: [...state.selected, action.payload],
      };
    case REMOVE_FROM_SELECTED:
      return {
        ...state,
        selected: state.selected.filter(
          (sync) => sync.id !== action.payload.id
        ),
      };
    case CLEAR_SELECTED:
      return {
        ...state,
        selected: [],
      };
    default:
      return state;
  }
};

export default syncReducer;
