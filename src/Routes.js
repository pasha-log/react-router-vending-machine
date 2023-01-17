import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Yerba from './Yerba';
import Chips from './Chips';
import LaraBar from './Larabar';

const Routes = () => {
	return (
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
	);
};

export default Routes;
