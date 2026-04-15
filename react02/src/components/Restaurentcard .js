 import { CDN_LOGO } from "../utils/CDN";
 const Restaurentcard = (props) => {
      const { resData } = props;
      const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
      return (
        <div className="res-card">
          <div className="card-image">
            <img
              className="res-logo"
              src={CDN_LOGO}
              alt={resData?.data?.name}
            />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join( ' ,  ' )}</h4>
             
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.costForTwo / 100} for two</h4>
          </div>
        </div>
      )
    }

    export  default Restaurentcard ;