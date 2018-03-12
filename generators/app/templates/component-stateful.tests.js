/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {mount} from 'enzyme';
import <%= componentName %>  from '../<%= componentName %>';

<%_ function camelCaser (oldName) {
  const oldNameArray = oldName.split('');
  const firstLetter = oldNameArray[0].toLowerCase();
  oldNameArray.splice(0,1,firstLetter);
  return oldNameArray.join('');
} %>

describe('<%= componentName %>', () => {
  let props;
  let mounted<%= componentName %>;

  const <%= camelCaser(componentName) %> = () => {
    if (!mounted<%= componentName %>) {
      mounted<%= componentName %> = mount(<<%= componentName %> {...props} />);
    }
      return mounted<%= componentName %>;
    };

  beforeEach(() => {
    props = {};
    mounted<%= componentName %> = undefined;
  });

  // All tests will go here
});
