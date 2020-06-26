const { Item } = require("semantic-ui-react")

import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './index';
import Features from '../../Features';

configure({adapter: new Adapter()});

describe('<Home />', () => {
  it('Should render <Features /> element when home is rendered', () =>{
      const wrapper = shallow(<Home />);
      expect(wrapper.find(Features));
  });
})