import "./genre.css"
import GenreItem from "./GenreItem"

const Genre = ({songList}) => {
  // console.log("songList: ", songList);
  

  return (
    <div className="genre">
      <h1 className="genre__label">Thể loại</h1>
      <div className="genre__container">
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
      </div>
    </div>
  )
}

export default Genre
