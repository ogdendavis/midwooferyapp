import React from 'react';
// import PropTypes from 'prop-types';

// Material-UI version of normalize.css
import CssBaseLine from '@material-ui/core/CssBaseline';

import Login from '../Login';

const App = () => {
  console.log('running');
  // Initial state setup
  // const [token, setToken] = useState('');
  // const [user, setUser] = useState({});
  // const [loggedIn, setLoggedIn] = useState(false);

  // Helper functions

  // Effect when breeder is logged in
  // useEffect(() => {
  //   if (breederId === false) {
  //     setActiveBreeder({});
  //     return;
  //   }
  //   loadActiveBreeder(breederId);
  // }, [breederId]);

  return (
    <div>
      <CssBaseLine />
      <Login />
    </div>
  );
};

export default App;
