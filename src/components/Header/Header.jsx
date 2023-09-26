import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="flex-1">
                <img src="https://i.ibb.co/6v14mvQ/Logo.png" alt="" />
            </div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/donation'>Donation</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Header;