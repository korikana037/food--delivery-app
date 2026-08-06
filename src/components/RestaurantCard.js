
import { CDN_URL } from '../utils/constants.js';

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className='res-card'>
            <img className='res-logo' src={CDN_URL + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <div className='rating-time'>
                <span>⭐{resData.info.avgRating} </span>
                <span>{resData.info.sla.deliveryTime}</span>
            </div>
            <p>{resData.info.cuisines.join(", ")}</p>
            <p>{resData.info.costForTwo}</p>
            <p>{resData.info.areaName}</p>
        </div>
    )
}

export default RestaurantCard;