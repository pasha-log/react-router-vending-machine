import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		<ul className="Navbar">
			<li>
				<NavLink exact to="/yerba">
					Yerba Mate
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/chips">
					Chips
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/larabar">
					LaraBar
				</NavLink>
			</li>
		</ul>
	);
};

export default NavBar;
