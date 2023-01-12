import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Yerba from './Yerba';
import Chips from './Chips';
import LaraBar from './Larabar';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/yerba">
					<Yerba />
				</Route>
				<Route exact path="/chips">
					<Chips />
				</Route>
				<Route exact path="/larabar">
					<LaraBar />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
