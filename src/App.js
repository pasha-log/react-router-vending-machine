import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Yerba from './Yerba';
import Chips from './Chips';
import LaraBar from './Larabar';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
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
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
