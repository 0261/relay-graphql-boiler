import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from '../pages';
import { RoutePath } from './path';

export default (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RoutePath.Home} component={Page.Homepage} />
      </Switch>
    </BrowserRouter>
  );
};
