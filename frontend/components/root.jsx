import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CityListItemContainer from './city_lists/city_list_item_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/api/city/:city_id' component={CityListItemContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
