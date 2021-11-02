import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import <%= componentName %> from '../<%= componentName %>';

let props;
beforeEach(() => {
  props = {
    functionProp: jest.fn(),
    stringProp: 'String Prop',
  };
});

afterEach(cleanup);

describe('<%= componentName %>', () => {
  it('renders as expected', () => {
    render(
      <<%= componentName %> {...props} />
    )
  });
});
