import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CustomersGroups from './customers-groups';
import CustomersList from './customers-list';


const Customers = ({ match }) => {
	return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
      <Route path={`${match.url}/list`} component={CustomersList} />
      <Route
        path={`${match.url}/customers-groups`}
        component={CustomersGroups}
      />
    </Switch>
  );
};

export default Customers;
