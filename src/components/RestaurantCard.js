const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className='res-card'>
            <img className='res-logo' src={resData.image} />
            <h3>{resData.name}</h3>
            <div className='rating-time'>
                <span>⭐{resData.rating} </span>
                <span>{resData.deliveryTime}</span>
            </div>
            <p>{resData.cuisines.join(", ")}</p>
            <p>{resData.costForTwo}</p>
            <p>{resData.area}</p>
        </div>
    )
}

export default RestaurantCard;