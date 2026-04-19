import Restaurentcard from "./Restaurentcard ";
import resList from "../utils/Blanckdata";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
// let listofRestaurent = [{
    
   
//     data: {
//       type: 'F',
//       id: '121603',
//       name: 'Kannur Food Point',
      
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['Kerala', 'Chinese'],
    
//       costForTwo: 30000,
//        avgRating: '4.1',
//       },
      
//     },
//     {
        
//     data: {
//       type: 'F',
//       id: '121604',
//       name: 'KFC',
      
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['Kerala', 'Chinese'],
    
//       costForTwo: 30000,
//        avgRating: '4.5',
//       },
//     },
//      {
        
//     data: {
//       type: 'F',
//       id: '121607',
//       name: 'Zohra',
      
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['Kerala', 'Chinese'],
    
//       costForTwo: 30000,
//        avgRating: '4.9',
//       },
//     }

// ];






const Body = ()=> {



  const [listofRestaurent, setlistofRestaurent] = useState([{data: {
      type: 'F',
      id: '121603',
      name: 'Kannur Food Point',
      
      cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
      cuisines: ['Kerala', 'Chinese'],
    
      costForTwo: 30000,
       avgRating: '3.9',
      },
      
    },
    {
        
    data: {
      type: 'F',
      id: '121604',
      name: 'KFC',
      
      cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
      cuisines: ['Kerala', 'Chinese'],
    
      costForTwo: 30000,
       avgRating: '4.5',
      },
    },
     {
        
    data: {
      type: 'F',
      id: '121607',
      name: 'Zohra',
      
      cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
      cuisines: ['Kerala', 'Chinese'],
    
      costForTwo: 30000,
       avgRating: '4.9',
      },
    }]);

    const [searchText, setsearchText] = useState("");

    useEffect(()=>{
      console.log("useEffect is called ");
    }, [])

   // console.log("body called")

      if(listofRestaurent.length === 0){
        return  <Shimmer/>;
      }

      return (
        <div className="body">
          <div className="rated-search">
            <div className="filter-btn"> <button  className="button-filter"
      onClick={() => {
        const filtered = listofRestaurent.filter((res) => {
          return res.data.avgRating > 4; 
        });

      setlistofRestaurent(filtered);
      //  console.log(filtered);
          }}>
            Top Rated Restauren 
            </button></div>
         
         <div className="search">
          <input className="search-res" type="text" value={searchText}  onChange={(e)=>{setsearchText(e.target.value)}}></input>
          <button className="serach-button" onClick={( )=>{ 
         const filterRestaurent = listofRestaurent.filter(
          (res)=>{ 
            return res.data.name.toLowerCase().includes(searchText.toLowerCase());
             console.log(filterRestaurent)
          }
             
            )
            setlistofRestaurent(filterRestaurent);
          }   }>search </button>
         </div>
          </div>
          <div className="res-container">
           
            {
            listofRestaurent.map((restaurant)=>(
              <Restaurentcard key={restaurant.data.id} resData={restaurant}/>
            ))}
          </div>
        </div>
      )
    }

export default Body;


    

  
      
       
    
      
    