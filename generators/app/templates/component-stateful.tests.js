/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import <%= componentName %> from '../<%= componentName %>';

describe('<%= componentName %>', () => {

  test('renders without crashing', () => {
    const Component = shallow(<<%= componentName %> />);
  });

});
