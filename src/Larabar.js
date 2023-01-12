import React from 'react';
import { NavLink } from 'react-router-dom';

function LaraBar() {
	return (
		<div>
			<h1>Energy Bar</h1>
			<NavLink exact to="/">
				Go Back
			</NavLink>
			<img
				alt=""
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrslXt10E9d4brtooCFFy6NaV9Dq2IB4VVgw&usqp=CAU"
			/>
		</div>
	);
}

export default LaraBar;
