import './music-list-detail.css'
import { FavoriteBorder, PlayArrow, MoreHoriz, AccessTime } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import MusicSongItem from './MusicSongItem'

import { getSongToPlay } from '../../redux/actions'
import { useSelector } from 'react-redux'

import Proptypes from 'prop-types'

import { useDispatch } from 'react-redux'
const useStyles = makeStyles({
  mr: {
    marginRight: '2rem'
  },
  icon: {
    fontSize: '4rem',
    opacity: '0.6',
    '&:hover': {
      opacity: '1'
    }
  }
})

const MusicListDetail = ({ songList }) => {
  const genreList = useSelector(state => state.genreReducer.genreList)

  const newGenreList = songList.filter(songGenre => songGenre.name === genreList)

  const classes = useStyles()
  const coverImage = newGenreList[0].songs[0].coverImage

  const dispatch = useDispatch()
  const handleGetSongToPlay = (title, creator, avatar, music, index) => {
    dispatch(getSongToPlay({ title, creator, avatar, music, index, playing: true }))
  }

  return (
    <>
      <div className="music-list-detail__top">
        <img
          src={
            coverImage ||
            'https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600244061118_500.jpg'
          }
          alt=""
          className="music-list-detail__coverImg"
        />

        <div className="music-list-detail__info">
          <h3 className="music-list-detail__title">Playlist</h3>

          <h1 className="music-list-detail__name">{genreList || 'Nhạc Trẻ'}</h1>

          <p className="music-list-detail__desc">
            {newGenreList[0].songs.length || '0'} bài hát, khoảng 8 giờ 30 phút
          </p>
        </div>
      </div>

      <div className="music-list-detail__btn">
        <button className="play-btn" style={{ width: '6rem', height: '6rem', marginRight: '2rem' }}>
          <PlayArrow style={{ fontSize: '4rem' }} />
        </button>

        <div className={classes.mr}>
          <FavoriteBorder className={classes.icon} />
        </div>

        <div className={classes.mr}>
          <MoreHoriz className={classes.icon} />
        </div>
      </div>

      <div className="music-list-detail__songs">
        <div className="music-list-detail__head">
          <div className="music-list-detail__order">#</div>
          <div className="music-list-detail__label">Tiêu đề </div>
          <div className="music-list-detail__singer">Thể loại</div>
          <div className="music-list-detail__duration">
            <AccessTime fontSize="large" />
          </div>
        </div>
        <div className="music-list-detail__songs--wrapper">
          {newGenreList &&
            newGenreList[0].songs.length > 0 &&
            newGenreList[0].songs.map((song, index) => (
              <MusicSongItem
                key={song.url}
                index={index}
                genre={genreList}
                avatar={song.avatar}
                creator={song.creator}
                title={song.title}
                music={song.music}
                handleGetSongToPlay={handleGetSongToPlay}
              />
            ))}
        </div>
      </div>
    </>
  )
}

MusicListDetail.propTypes = {
  songList: Proptypes.array
}

export default MusicListDetail
