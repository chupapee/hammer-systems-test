import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
	<Suspense fallback={<Loading cover='content' />}>
		<Switch>
			{/* <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
			<Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
			<Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} /> */}
			<Route path={`${match.url}/customers`} component={lazy(() => import(`./customers`))} />
			{/* <Route path={`${match.url}/promocodes`} component={lazy(() => import(`./promocodes`))} />
			<Route path={`${match.url}/offlinePoints`} component={lazy(() => import(`./offlinePoints`))} />
			<Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
			<Route path={`${match.url}/mailInbox`} component={lazy(() => import(`./mailInbox`))} /> */}
			<Redirect from={`${match.url}`} to={`${match.url}/customers`} />
		</Switch>
	</Suspense>
);

export default Main;
