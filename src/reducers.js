import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

const INITIAL_STATE = {
  searchField: "",
  isPending: false,
  error: "",
  robots: [],
};

export const searchRobots = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    default:
      return state;
  }
};
