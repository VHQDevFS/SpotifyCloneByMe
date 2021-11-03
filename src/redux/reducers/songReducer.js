import { FETCH_ALL_SONG_LOADING, FETCH_ALL_SONG_SUCCESS, FETCH_ALL_SONG_FAIL } from "../constant"

const initialState = {
  loading: false,
  data: [],
  errorMsg: null,
  duration: null
}

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_SONG_LOADING:
      return { ...state, loading: true }

    case FETCH_ALL_SONG_SUCCESS:
      return { ...state, loading: false, data: action.payload.data, errorMsg: "" }
      
    case FETCH_ALL_SONG_FAIL:
      return { ...state, loading: false, errorMsg: "unable to get song" }

    default:
      return state
  }
}

export default songReducer