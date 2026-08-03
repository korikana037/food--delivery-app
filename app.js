import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://img.magnific.com/premium-vector/fast-free-food-delivery_1208773-925.jpg?semt=ais_hybrid&w=740&q=80' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
     {
    id: "1",
    name: "KFC",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    cuisines: ["Burger", "Fast Food", "Rolls"],
    rating: 4.3,
    deliveryTime: "22 mins",
    costForTwo: "₹400 for two",
    area: "Madhurawada",
  },
  {
    id: "2",
    name: "Pizza Hut",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    cuisines: ["Pizza", "Italian"],
    rating: 4.2,
    deliveryTime: "30 mins",
    costForTwo: "₹350 for two",
    area: "PM Palem",
  },
  {
    id: "3",
    name: "Domino's Pizza",
    image:
      "https://images.unsplash.com/photo-1548365328-9f547fb0953b?w=600",
    cuisines: ["Pizza", "Cheese Burst"],
    rating: 4.4,
    deliveryTime: "25 mins",
    costForTwo: "₹500 for two",
    area: "MVP Colony",
  },
  {
    id: "4",
    name: "Subway",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=600",
    cuisines: ["Sandwich", "Salads", "Healthy Food"],
    rating: 4.1,
    deliveryTime: "18 mins",
    costForTwo: "₹300 for two",
    area: "Yendada",
  },
  {
    id: "5",
    name: "Burger King",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    cuisines: ["Burger", "Fries", "Beverages"],
    rating: 4.0,
    deliveryTime: "20 mins",
    costForTwo: "₹450 for two",
    area: "Madhurawada",
  },
  {
    id: "6",
    name: "The Belgian Waffle Co.",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600",
    cuisines: ["Desserts", "Waffles", "Ice Cream"],
    rating: 4.7,
    deliveryTime: "28 mins",
    costForTwo: "₹250 for two",
    area: "Midhilapuri",
  },
  {
    id: "7",
    name: "Paradise Biryani",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d29a?w=600",
    cuisines: ["Biryani", "North Indian"],
    rating: 4.5,
    deliveryTime: "35 mins",
    costForTwo: "₹600 for two",
    area: "Beach Road",
  },
  {
    id: "8",
    name: "Mehfil Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    cuisines: ["Biryani", "Chinese", "Tandoori"],
    rating: 4.2,
    deliveryTime: "32 mins",
    costForTwo: "₹500 for two",
    area: "Gajuwaka",
  },
];

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

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

