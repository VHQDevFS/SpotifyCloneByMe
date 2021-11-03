import { PlayArrow, Pause } from "@mui/icons-material"
import { useState } from "react"
import "./playlist-item.css"
import { useHistory } from "react-router"

import { useDispatch } from "react-redux"
import { getGenreSong } from "../../redux/actions"

const PlaylistHeaderItem = ({ title, coverImg }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleClick = genre => {
    history.push("/musicplaylist")
    dispatch(getGenreSong(genre))
  }
  const [isPlay, setIsPlay] = useState(true)

  const handlePlay = () => {
    setIsPlay(!isPlay)
  }
  return (
    <div className="playlist-header__item" onClick={() => handleClick(title)}>
      <img
        src={
          coverImg || "https://avatar-ex-swe.nixcdn.com/song/2021/09/09/f/c/f/d/1631181753902.jpg"
        }
        alt=""
        className="playlist-header__image"
      />
      <p className="playlist-header__name"> {title} </p>
      <div className="playlist-header__button" onClick={handlePlay}>
        {!isPlay ? (
          // <PlayCircle  className={classes.root} />
          <button className="play-btn">
            <PlayArrow fontSize="large" />
          </button>
        ) : (
          <button className="play-btn">
            <Pause fontSize="large" />
          </button>
        )}
      </div>
    </div>
  )
}

export default PlaylistHeaderItem
