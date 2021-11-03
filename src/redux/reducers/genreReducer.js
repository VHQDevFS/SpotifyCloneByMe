import { GET_GENRE_SONG } from "../constant";

const initialState = {
  genreList: ''
}

const genreReducer = (state= initialState, action) => {
  switch (action.type) {
    case GET_GENRE_SONG:
      return {
        ...state,
        genreList: action.payload
      }
  
    default:
     return state
  }
}

export default genreReducer