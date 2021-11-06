/* eslint-env jest */
import { cleanup, render } from '@testing-library/react';
import <%= componentName %> from '../<%= componentName %>';

let props;

beforeEach(() => {
  props = {};
});

afterEach(cleanup);

describe('<%= componentName %>', () => {
  it('renders as expected', () => {
    render(<<%= componentName %> {...props} />);
  });
});
