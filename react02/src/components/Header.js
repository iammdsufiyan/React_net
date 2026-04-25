import { useState } from "react";
import { CDN_URL } from "../utils/CDN";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnlogin, setbtnlogin] = useState("login");
    
      return  (
       <div className="header">
        <div className="logo-container">
          <img className="logo" src={CDN_URL}/>
        </div>
          <div className="nav-item">
              <ul>
                <li >   
                  <Link to = "/"> Home</Link> </li>
               <li  >
                <Link to = "/aboutus">AboutUs</Link>
               </li>
                <li> 
                     <Link to = "/contactus">ContactUs</Link>
                </li>
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