import React from 'react';
import { mount } from 'enzyme';

import App from './index';

describe('Components mount', () => {
  it('Mounts expected components on initial load', () => {
    // Create dummy object and mock breeder API call
    const dummyBreeders = [
      {
        id: 'b1',
        firstname: 'Fred',
        lastname: 'Astaire',
        city: 'Marshall',
        state: 'TX',
        createdAt: '2020-11-20T14:19:39.551Z',
        updatedAt: '2020-11-20T14:19:39.551Z',
        deletedAt: null,
      },
      {
        id: 'b2',
        firstname: 'Ginger',
        lastname: 'Rogers',
        city: 'Kingston',
        state: 'RI',
        createdAt: '2020-11-20T14:19:39.553Z',
        updatedAt: '2020-11-20T14:19:39.553Z',
        deletedAt: null,
      },
    ];
    fetch.mockResponse(JSON.stringify(dummyBreeders));
    // Mount the wrapper
    const wrapper = mount(<App />);
    // Buttons on initial load
    const buttons = wrapper.find('button');
    expect(buttons.first().text()).toEqual('Reset');
    expect(buttons.length).toEqual(3);
  });
});
