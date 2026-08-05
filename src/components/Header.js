
import { HEADER_LOGO } from '../utils/constants'
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

export default Header;