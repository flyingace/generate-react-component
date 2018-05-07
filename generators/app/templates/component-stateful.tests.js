/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import <%= componentName %> from '../<%= componentName %>';

describe('<%= componentName %>', () => {

  test('renders without crashing', () => {
    const Component = shallow(<<%= componentName %> />);
  });

  it('matches its existing snapshot', () => {
    const snapshot = renderer.create(<<%= componentName %> />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
