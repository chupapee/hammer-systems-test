import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CustomersGroups from './customers-groups';
import CustomersList from './customers-list';
import EditCustomer from './edit-customer';

import { useCustomers } from './model/helpers/useCustomers';

const Customers = ({ match }) => {
  const { customers, error, isPending } = useCustomers()

  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/list`}
        component={() => (
          <CustomersList
            customers={customers}
            isPending={isPending}
            fetchError={error}
          />
        )}
      />
      <Route
        path={`${match.url}/edit-customer/:id`}
        component={() => <EditCustomer customers={customers} isPending={isPending} />}
      />
      <Route
        path={`${match.url}/customers-groups`}
        component={CustomersGroups}
      />
    </Switch>
  );
};

export default Customers;
