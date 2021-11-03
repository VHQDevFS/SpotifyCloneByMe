import Genre from '../Genre/Genre'
import MusicListDetail from '../MusicListDetail/MusicListDetail'
import Loading from '../Loading/Loading'
import PlaylistHeader from '../Playlist/PlaylistHeader'
import { Switch, Route } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllSongs } from '../../redux/actions'

import './content.css'

const Content = () => {
  const isLoading = useSelector(state => state.songReducer.loading)
  const songList = useSelector(state => state.songReducer.data.top100_VN)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllSongs())
  }, [dispatch])
  return (
    <div className="content__wrapper">
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            if (isLoading) return <Loading />
            else
              return (
                <>
                  <PlaylistHeader songList={songList} />
                  <Genre />
                </>
              )
          }}
        />
        <Route path="/musicplaylist" render={() => <MusicListDetail songList={songList} />} />
      </Switch>
    </div>
  )
}

export default Content
