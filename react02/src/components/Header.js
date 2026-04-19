
import { useState } from "react";
import { CDN_URL } from "../utils/CDN";
const Header = () => {
    const [btnlogin, setbtnlogin] = useState("login");
    
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
                 <button className="btnlogin" onClick={()=>{
              if(btnlogin === "login"){
                  setbtnlogin("logout");
              }else{
                 setbtnlogin("login");
              }
                   
                 }}>{btnlogin}</button>
              </ul>
          </div>

       </div>
       
      )
    }

    export default Header;