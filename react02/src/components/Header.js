
import { CDN_URL } from "../utils/CDN";
const Header = () => {
      return  (
       <div className="header">
        <div className="logo-container">
          <img className="logo" src={CDN_URL}/>
        </div>
          <div className="nav-item">
              <ul>
                <li>   Home  </li>
                <li>  About us </li>
                <li> Contact us</li>
                 <li>Cart</li>
              </ul>
          </div>

       </div>
       
      )
    }

    export default Header;