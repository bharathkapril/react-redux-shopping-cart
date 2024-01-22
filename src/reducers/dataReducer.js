import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../actions/dataActions";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default dataReducer;
