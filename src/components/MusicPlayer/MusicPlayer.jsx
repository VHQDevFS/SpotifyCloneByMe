import {
  Favorite,
  FavoriteBorder,
  PictureInPicture,
  Shuffle,
  SkipPrevious,
  SkipNext,
  Repeat,
  PlayCircle,
  PauseCircle,
  VolumeUp,
  VolumeDown,
  VolumeOff,
  OpenInFull
} from '@mui/icons-material'

import { makeStyles } from '@mui/styles'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import './music-player.css'

import { fancyTimeFormat } from '../../helpers'

const useStyles = makeStyles({
  root: {
    transform: 'scale(1.5)',
    '&:active': {
      transform: 'scale(2)'
    },
    transition: 'all 0.2s linear'
  }
})

const MusicPlayer = () => {
  const classes = useStyles()
  // const [rangeValue, setRangeValue] = useState(0)
  const [isPlay, setIsPlay] = useState(false)
  const [currentTimeSong, setCurrentTimeSong] = useState('0:00')
  const [durationSong, setDurationSong] = useState('')

  const song = useSelector(state => state.playReducer.song)
  const { title, creator, avatar, music, playing } = song

  const handleBtnPlay = () => {
    setIsPlay(!isPlay)
  }
  useEffect(() => {
    const audio = document.getElementById('music-player__audio')
    if (playing) {
      audio.play()
      setIsPlay(true)
    } 
  }, [playing])

  useEffect(() => {
    const audio = document.getElementById('music-player__audio')

    if (isPlay) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isPlay])

  // xử lý thanh progress và tua bài hát
  useEffect(() => {
    const audio = document.getElementById('music-player__audio')

    const progressTime = document.querySelector('.music-player__progressbar--duration')

    const soundVolume = document.querySelector('.music-player__progressbar--sound')

    audio.ontimeupdate = () => {
      setDurationSong(fancyTimeFormat(Math.floor(audio.duration)))
      setCurrentTimeSong(fancyTimeFormat(Math.floor(audio.currentTime)))

      let checkOnmouseAndTouch = true
      progressTime.onmousedown = () => {
        checkOnmouseAndTouch = false
      }

      progressTime.ontouchstart = () => {
        checkOnmouseAndTouch = false
      }
      if (audio.duration && checkOnmouseAndTouch) {
        const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100)
        progressTime.value = progressPercent
      }

      progressTime.onchange = e => {
        const seekTime = Math.floor((audio.duration / 100) * e.target.value)
        audio.currentTime = seekTime
      }

      // sound
      soundVolume.onmousedown = () => {
        checkOnmouseAndTouch = false
      }

      soundVolume.ontouchstart = () => {
        checkOnmouseAndTouch = false
      }

      soundVolume.onchange = e => {
        audio.volume = e.target.value
      }
    }
  }, [])
  return (
    <div className="music-player__wrapper">
      <div className="music-player__left">
        <img
          src={
            avatar ||
            'https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg'
          }
          alt=""
          className="music-player__avatar"
        />
        <div className="music-player__info">
          <h3 className="music-player__song">{title}</h3>
          <h5 className="music-player__singer">{creator}</h5>
        </div>

        <div className="music-player__icon--wrapper">
          <div className="music-player__icon--fav">
            <FavoriteBorder fontSize="medium" />
          </div>
          {/* <Favorite/> */}
          <div className="music-player__icon--fav">
            <PictureInPicture fontSize="medium" />
          </div>
        </div>
      </div>

      <div className="music-player__center">
        <div className="music-player__button">
          <div className="music-player__button--item">
            <Shuffle fontSize="large" />
          </div>

          <div className="music-player__button--item">
            <SkipPrevious fontSize="large" />
          </div>

          <div className="music-player__button--item" onClick={handleBtnPlay}>
            {!isPlay ? (
              <PlayCircle fontSize="large" className={classes.root} />
            ) : (
              <PauseCircle fontSize="large" className={classes.root} />
            )}
          </div>

          <div className="music-player__button--item">
            <SkipNext fontSize="large" />
          </div>
          <div className="music-player__button--item">
            <Repeat fontSize="large" />
          </div>
        </div>

        <div className="music-player__progress">
          <div className="music-player__timeupdate">{currentTimeSong}</div>
          <label className="music-player__progress--label">
            <input
              className="music-player__progressbar music-player__progressbar--duration"
              type="range"
              defaultValue="0"
              step="1"
              min="0"
              max="100"
            />
          </label>
          <div className="music-player__duration">{durationSong}</div>
        </div>
        <audio
          id="music-player__audio"
          src={
            music ||
            'https://aredir.nixcdn.com/NhacCuaTui930/WhenIFallInLove-DangCapNhat-4654004.mp3?st=TnT2_wIoGZg_5XCkwhLRBQ&e=1631635377'
          }
          onEnded={() => setIsPlay(false)}
        />
      </div>

      <div className="music-player__right">
        {/* <div className="music-player__queue">
          <QueueMusic fontSize="large" />
        </div> */}
        <div className="music-player__sound">
          <div className="music-player__sound--icon">
            <VolumeUp fontSize="large" />
            {/* <VolumeDown/>
          <VolumeOff/> */}
          </div>
        </div>
        <label htmlFor="sound" id="music-player__progressbar--sound">
          <input
            id="sound"
            className="music-player__progressbar music-player__progressbar--sound"
            type="range"
            min="0"
            max="1"
            step="0.1"
          />
        </label>
        <div className="music-player__fullscreen">
          <OpenInFull fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
