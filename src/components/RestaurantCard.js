import { CDN_URL } from '../utils/constants.js';

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">

            {/* Restaurant Image */}
            <div className="relative h-48 overflow-hidden">

                <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={
                        CDN_URL +
                        resData.info.cloudinaryImageId
                    }
                    alt={resData.info.name}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-md">
                    ⭐ {resData.info.avgRating}
                </div>

            </div>

            {/* Card Content */}
            <div className="p-4">

                {/* Restaurant Name */}
                <h3 className="text-lg font-bold text-gray-800 truncate">
                    {resData.info.name}
                </h3>

                {/* Rating + Delivery Time */}
                <div className="flex items-center gap-3 mt-2 text-sm">

                    <span className="font-semibold text-gray-700">
                        ⭐ {resData.info.avgRating}
                    </span>

                    <span className="text-gray-400">
                        •
                    </span>

                    <span className="text-gray-600">
                        {resData.info.sla.deliveryTime} mins
                    </span>

                </div>

                {/* Cuisine */}
                <p className="text-gray-500 text-sm mt-2 line-clamp-1">
                    {resData.info.cuisines.join(', ')}
                </p>

                {/* Cost */}
                <p className="text-gray-700 font-medium text-sm mt-2">
                    {resData.info.costForTwo}
                </p>

                {/* Location */}
                <p className="text-gray-400 text-sm mt-1 truncate">
                    📍 {resData.info.areaName}
                </p>

            </div>
        </div>
    );
};

export default RestaurantCard;