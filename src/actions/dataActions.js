import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchDataRequest = () => {
  return { type: FETCH_DATA_REQUEST };
};

export const fetchDataSuccess = (data) => {
  return { type: FETCH_DATA_SUCCESS, payload: data };
};

export const fetchDataError = (error) => {
  return { type: FETCH_DATA_ERROR, payload: error };
};

export const fetchFn = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const userData = await axios.get("https://fakestoreapi.com/products");
      console.log(userData.data);
      dispatch(fetchDataSuccess(userData.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError(error.message));
    }
  };
};
