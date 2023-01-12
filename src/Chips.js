import React from 'react';
import { NavLink } from 'react-router-dom';

function Chips() {
	return (
		<div>
			<h1>Chips</h1>
			<NavLink exact to="/">
				Go Back
			</NavLink>
			<img
				alt=""
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3X3VOm12gm2-Sqroe0xFGkn5gOjNttwaSw&usqp=CAU"
			/>
		</div>
	);
}

export default Chips;
