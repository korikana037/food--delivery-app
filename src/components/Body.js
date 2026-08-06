import resList from '../utils/mockdata';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async() => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7237152&lng=83.3067747&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        setListOfRestaurants(
             json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurants(
             json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );

    }

    return  listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input
                     type='text'
                     className='search-box'
                     value={searchText}
                     onChange={(e) => {
                        setSearchText(e.target.value);
                     }}
                    />
                    <button
                     onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => 
                         res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurants);
                     }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.1
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Find only top Restaurants Near you
                </button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;