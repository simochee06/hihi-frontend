import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import LP from '../containers/LP';
import Auth from './Admin/Auth';
import Login from './Admin/Login';

/**
 * ルーティングを定義するクラス
 */
class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.history = syncHistoryWithStore(createBrowserHistory(), props.store);
  }

  render () {
    return (
      <Router history={this.history}>
        <Switch>
          <Route exact path="/" component={LP} />
          <Route path="/dashboard/login" component={Login} />
          <Auth>
            <Switch>
              <Route path="/dashboard/home">
                <h1>Home!</h1>
              </Route>
            </Switch>
          </Auth>
        </Switch>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  store: PropTypes.any.isRequired
};

export default AppRouter;
