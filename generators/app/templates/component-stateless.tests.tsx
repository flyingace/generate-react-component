/* eslint-env jest */
import userEvent from '@testing-library/user-event';
import <%= componentName %>, {<%= componentName %>Props} from '../<%= componentName %>';
import { renderWithProviders } from 'lib/test/test-utility-functions';

const setup = (props?: <%= componentName %>Props) => {
  const currentProps: <%= componentName %>Props = {
    ...props,
  };
  const user = userEvent.setup();
  const utils = renderWithProviders(<<%= componentName %> {...currentProps} />);
  return {
    ...utils,
    user,
  };
};

describe('<%= componentName %>', () => {
  test('it renders without errors', () => {
    setup();
  });
});