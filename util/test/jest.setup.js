import React from 'react';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

// Set up fetch mocking via jest-fetch-mock
// Eliminates 'fetch is not defined' warning, allows creating responses from fetch for tests
require('jest-fetch-mock').enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});
