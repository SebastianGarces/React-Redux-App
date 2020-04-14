import { types } from "../actions";

const initialState = {
  dataToDisplay: [],
  isLoading: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  return action.type === types.FETCH_REQ
    ? { ...state, isLoading: true, dataToDisplay: [] }
    : action.type === types.FETCH_SUCCESS
    ? { ...state, isLoading: false, dataToDisplay: action.payload, error: null }
    : action.type === types.FETCH_FAILED
    ? { ...state, isLoading: false, error: action.payload }
    : state;
};
