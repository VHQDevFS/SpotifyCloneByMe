import { ArrowBackIos, ArrowForwardIos,ArrowDropDown, ArrowDropUp} from "@mui/icons-material"
import { useState } from "react"
import './Navbar.css'
import { useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false)

  const handleDisplayDropMenu = () => {
    setIsDropdown(!isDropdown)
  }

  const history = useHistory()
  const location = useLocation()
  const handleClickBack = () => {
    if(location.pathname === '/') return
    history.goBack()
  }

  const handleClickForward= () => {
    history.goForward()
  }
  
  return (
    <div className="navbar__container">
      <div className="navbar__icon--wrapper">
        <div className="navbar___icon" onClick={handleClickBack}>
          <ArrowBackIos className="icon"/>
        </div>
        <div className="navbar___icon" onClick={handleClickForward}>
          <ArrowForwardIos className="icon" />
        </div>
        
      </div>
      <div className="navbar__user" onClick={handleDisplayDropMenu} >
        <img src="https://i.scdn.co/image/ab6775700000ee8583a62b9c73cdde1be3c2f1c2" alt="" className="navbar__user-avatar" />
        <span className="navbar__user-name">Viet Hoang</span>
        <div >
          {!isDropdown ? <ArrowDropDown fontSize='large'/> : <ArrowDropUp fontSize='large'/>}
        </div>
        {
          isDropdown && <ul className="navbar-dropdown"  >
          <li className="navbar-dropdown__item">
            Tài khoản
          </li>
          <li className="navbar-dropdown__item">
            Hồ sơ
          </li>
          <li className="navbar-dropdown__item">
            Đăng xuất
          </li>
          </ul>
        }
      </div>
   
       
      
    </div>
  )

}

export default Navbar
