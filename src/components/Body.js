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

    const fetchData = async () => {
        const data = await fetch(
            'https://namastedev.com/api/v1/listRestaurants'
        );

        const json = await data.json();

        console.log(json);

        const restaurants =
            json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
                <div className="text-6xl mb-4">📡</div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Looks like you're offline
                </h1>

                <p className="text-gray-500">
                    Please check your internet connection and try again.
                </p>
            </div>
        );
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="bg-gray-50 min-h-screen">

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Discover the best restaurants 🍴
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Delicious food delivered to your doorstep
                    </p>
                </div>

                {/* Search + Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-10">

                    {/* Search */}
                    <div className="flex flex-1 max-w-2xl">

                        <input
                            type="text"
                            placeholder="Search for restaurants..."
                            className="flex-1 px-5 py-3 rounded-l-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm text-gray-700"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />

                        <button
                            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-r-xl hover:bg-orange-600 transition-all duration-200 shadow-sm"
                            onClick={() => {
                                const filteredRestaurants =
                                    listOfRestaurants.filter((res) =>
                                        res.info.name
                                            .toLowerCase()
                                            .includes(searchText.toLowerCase())
                                    );

                                setFilteredRestaurants(filteredRestaurants);
                            }}
                        >
                            🔍 Search
                        </button>
                    </div>

                    {/* Rating Filter */}
                    <button
                        className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold shadow-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.1
                            );

                            setFilteredRestaurants(filteredList);
                        }}
                    >
                        ⭐ Top Rated Restaurants
                    </button>

                </div>

                {/* Restaurant Count */}
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-bold text-gray-800">
                        Restaurants near you
                    </h2>

                    <span className="text-sm text-gray-500">
                        {filteredRestaurants.length} restaurants
                    </span>
                </div>

                {/* Restaurant Cards */}
                {filteredRestaurants.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="text-6xl mb-4">🍽️</div>

                        <h2 className="text-xl font-semibold text-gray-700">
                            No restaurants found
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Try searching for something else.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {filteredRestaurants.map((restaurant) => (
                            <Link
                                key={restaurant.info.id}
                                to={'/restaurants/' + restaurant.info.id}
                                className="block"
                            >
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
};

export default Body;