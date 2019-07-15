import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('1+1', () => {
    expect(1 + 1).toEqual(2);
  });
  it('renders App', () => {
    const comp = shallow(<App />);
  });
});
