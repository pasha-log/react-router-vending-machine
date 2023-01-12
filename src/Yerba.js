import React from 'react';
import { NavLink } from 'react-router-dom';

function Yerba() {
	return (
		<div>
			<h1>MMMMMM GUILT-FREE CAFFEINE</h1>
			<NavLink exact to="/">
				Go Back
			</NavLink>

			<img
				alt=""
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4K7KRGZ_ODeh5L2cRdbRR_r7pXXCJ1JORMqgQBMZuZka8dHuJRNZlR4pKVkTJI7CBo8&usqp=CAU"
			/>
		</div>
	);
}

export default Yerba;
