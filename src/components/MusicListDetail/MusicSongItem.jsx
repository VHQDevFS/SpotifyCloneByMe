import { useRef, useState } from 'react'
import './music-song-item.css'
import { fancyTimeFormat } from '../../helpers'

import { useDispatch } from 'react-redux'
import { getSongToPlay } from '../../redux/actions'

export default function MusicSongItem({ title, creator, avatar, index, genre, music }) {
  const [duration, setDuration] = useState('')
  const audioRef = useRef(null)

  const onLoadMetaData = () => {
    if (audioRef.current) {
      setDuration(fancyTimeFormat(Math.floor(audioRef.current.duration)))
    }
  }

  const dispatch = useDispatch()

  const handleGetSongToPlay = (title, creator, avatar, music, index) => {
    dispatch(getSongToPlay({ title, creator, avatar, music, index, playing: true }))
  }
  return (
    <div
      className="music-song--item"
      onDoubleClick={() => handleGetSongToPlay(title, creator, avatar, music, index)}
    >
      <div className="music-song--item__order">{index + 1}</div>
      <div className="music-song--item__info">
        <img
          src={
            avatar ||
            'https://avatar-ex-swe.nixcdn.com/playlist/2020/09/29/f/9/f/7/1601348292491_500.jpg'
          }
          alt=""
          className="music-song--item__img"
        />
        <div className="music-song--item__label--wrapper">
          <h4 className="music-song--item__songName">{title}</h4>
          <p className="music-song--item__singerName">{creator}</p>
        </div>
      </div>
      <div className="music-song--item__album">{genre}</div>
      <audio ref={audioRef} onLoadedMetadata={onLoadMetaData}>
        <source src={music} type="audio/x-wav"></source>
      </audio>
      <div className="music-song--item__duration">{duration || '0:00'}</div>
    </div>
  )
}
