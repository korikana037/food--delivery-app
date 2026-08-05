import resList from '../utils/mockdata'
import RestaurantCard from './RestaurantCard'

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;