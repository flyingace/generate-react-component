/* eslint-env jest */
import { render } from '@testing-library/react';
import <%= componentName %> from '../<%= componentName %>';

let props;

beforeEach(() => {
  props = {};
});

describe('<%= componentName %>', () => {
  it('renders as expected', () => {
    render(<<%= componentName %> {...props} />);
  });
});
