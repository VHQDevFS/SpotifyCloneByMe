import { PlayArrow } from "@mui/icons-material"
import "./genre.css"




const GenreItem = () => {

  return (
    <div className="genre__item">
      <img
        src="https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg"
        alt=""
        className="genre__coverImg"
      />
      <h1 className="genre__title">Nhạc Trẻ</h1>
      <p className="genre__desc">Masew, Khôi Vũ, Đình Dũng và nhiều hơn nữa</p>
      <button className="play-btn play-btn__genre " ><PlayArrow fontSize="large"  /></button>
    </div>
  )
}

export default GenreItem
