/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import <%= componentName %> from '../<%= componentName %>';

it('renders without crashing', () => {
  shallow(<<%= componentName %> />);
});
