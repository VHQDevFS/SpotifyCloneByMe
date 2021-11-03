import axios from 'axios'

import {
  baseUrl,
  FETCH_ALL_SONG_LOADING,
  FETCH_ALL_SONG_SUCCESS,
  FETCH_ALL_SONG_FAIL,
  GET_GENRE_SONG,
  GET_SONG_TO_PLAY
} from '../constant'

export const getAllSongs = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_ALL_SONG_LOADING
    })

    const { data } = await axios.get(baseUrl)

    dispatch({ type: FETCH_ALL_SONG_SUCCESS, payload: { data: data.songs } })
  } catch (error) {
    dispatch({ type: FETCH_ALL_SONG_FAIL })
  }
}

export const getGenreSong = genre => {
  return { type: GET_GENRE_SONG, payload: genre }
}

export const getSongToPlay = song => {
  console.log('song: ', song)
  return { type: GET_SONG_TO_PLAY, payload: song }
}
