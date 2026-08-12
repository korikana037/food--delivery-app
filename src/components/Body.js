import resList from '../utils/mockdata';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async() => {
        const data = await fetch(
            'https://namastedev.com/api/v1/listRestaurants'
        );
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(
             json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurants(
             json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );

    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
        <h1>
            Looks Like your are offline. Please check your internet connection.
        </h1>
    );

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
                       <Link key={restaurant.info.id}
                        to={'restaurants/'+ restaurant.info.id}
                       >
                        <RestaurantCard  resData={restaurant} />
                       </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;