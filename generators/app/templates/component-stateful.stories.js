/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "action" }] */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { backgrounds } from 'stories/addons/backgrounds';
import <%= componentName %> from '../<%= componentName %>';

storiesOf('<%= componentName %>', module)
  .addDecorator(backgrounds)
  .add('<%= componentName %>', () => {
    return (<<%= componentName %> />);
  });
