/* eslint-env jest */
import { cleanup, render } from '@testing-library/react';
import <%= componentName %>, {<%= componentName %>Props} from '../<%=' +
' componentName %>';

let props:<%= componentName %>Props;

beforeEach(() => {
  props = {};
});

describe('<%= componentName %>', () => {
  test('it renders as expected', () => {
    render(<<%= componentName %> {...props} />);
  });
});
