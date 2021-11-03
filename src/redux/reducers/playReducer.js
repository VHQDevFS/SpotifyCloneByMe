import { GET_SONG_TO_PLAY } from '../constant'

const initialState = {
  song: {
    avatar: '',
    title: '',
    creator: '',
    linkMp3: ''
  }
}

const playReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG_TO_PLAY:
      return {
        ...state,
        song: action.payload
      }

    default:
      return state
  }
}

export default playReducer
