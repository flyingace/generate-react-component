/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { <%= componentName %> } from '../<%= componentName %>';

const initialProps = {
};

const setup = propOverrides => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<<%= componentName %> {...props} />);

    return {
    props,
    Component,
  };
};


describe('<%= componentName %>', () => {

  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<<%= componentName %> {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<<%= componentName %> {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
