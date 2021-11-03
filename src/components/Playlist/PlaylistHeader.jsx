import { useState } from "react"
import "./playlist-header.css"
import PlaylistHeaderItem from "./PlaylistHeaderItem"

const PlaylistHeader = ({ songList }) => {
  const [greeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour >= 6 && hour < 12) {
      return "Chào buổi sáng"
    }
    if (hour >= 12 && hour < 18) {
      return "Chào buổi chiều"
    } else return "Chào buổi tối"
  })

  return (
    <div className="playlist-header__wrapper">
      <h1 className="playlist-header__greeting">{greeting}</h1>
      <div className="playlist-header__container">
        {songList &&
          songList.length > 0 &&
          songList.map(item => <PlaylistHeaderItem key={item.name} title={item.name} coverImg={item.songs[0].coverImage} />)}
      </div>
    </div>
  )
}

export default PlaylistHeader
