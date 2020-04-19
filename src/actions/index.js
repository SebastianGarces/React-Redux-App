import axios from "axios";

export const types = {
  FETCH_REQ: "FETCH_REQ",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILED: "FETCH_FAILED",
};

export const fetchData = (url) => (dispatch) => {
  dispatch({ type: types.FETCH_REQ });

  setTimeout(() => {
    axios
      .get(url)
      .then((res) => dispatch({ type: types.FETCH_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: types.FETCH_FAILED, payload: err }));
  }, 1500);
};
