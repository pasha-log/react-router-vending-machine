import React from 'react';
import NavBar from './NavBar';
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div className="Vending-machine">
			<div className="Greeting">
				<p>Hello, I'm a vending machine. Pick a snack.</p>
			</div>
			<div className="Snack-choices">
				<NavBar />
			</div>
		</div>
	);
};

export default VendingMachine;
