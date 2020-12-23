import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Dogs from '../Dogs';
import Litters from '../Litters';
import About from '../About';
import Home from '../Home';

const RouterRender = (props) => {
  const { getDashState, setDashState } = props;

  return (
    <Switch>
      <Route path="/dashboard/home">
        <Home getDashState={getDashState} setDashState={setDashState} />
      </Route>
      <Route path="/dashboard/dogs">
        <Dogs getDashState={getDashState} setDashState={setDashState} />
      </Route>
      <Route path="/dashboard/litters">
        <Litters getDashState={getDashState} setDashState={setDashState} />
      </Route>
      <Route path="/dashboard/about">
        <About getDashState={getDashState} setDashState={setDashState} />
      </Route>
    </Switch>
  );
};

RouterRender.propTypes = {
  getDashState: PropTypes.func.isRequired,
  setDashState: PropTypes.func.isRequired,
};

export default RouterRender;
