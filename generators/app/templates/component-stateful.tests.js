/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import <%= componentName %> from '../<%= componentName %>';

/*
What to Test?
In comments are some general guidelines for what to test in a React component.
These came from Getting Started with TDD in React:
https://daveceddia.com/getting-started-with-tdd-in-react/
*/

describe('<%= componentName %>', () => {

  test('matches its existing snapshot', () => {
    const snapshot = renderer.create(<<%= componentName %> />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

/* Test the output */

/* Test the states */

/* Test the events */

/* Test the edge cases */

/* Optionally, test that no errors are printed to the console */

});
