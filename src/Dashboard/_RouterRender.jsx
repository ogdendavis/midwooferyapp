import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Dogs from './Dogs';
import Litters from './Litters';
import About from './About';
import Home from './Home';

const RouterRender = (props) => {
  const { dashState, setDashState } = props;
  console.log(dashState);

  return (
    <Switch>
      <Route path="/dashboard/home">
        <Home dashState={dashState} setDashState={setDashState} />
      </Route>
      <Route path="/dashboard/dogs">
        <Dogs dashState={dashState} setDashState={setDashState} />
      </Route>
      <Route path="/dashboard/litters">
        <Litters dashState={dashState} setDashState={setDashState} />
      </Route>
      <Route path="/dashboard/about">
        <About dashState={dashState} setDashState={setDashState} />
      </Route>
    </Switch>
  );
};

RouterRender.propTypes = {
  dashState: PropTypes.shape({
    settingsOpen: PropTypes.bool.isRequired,
    dogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
    litters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
    breeder: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    token: PropTypes.string.isRequired,
  }).isRequired,
  setDashState: PropTypes.func.isRequired,
};

export default RouterRender;
