import React from 'react';
import PropTypes from 'prop-types';
import './<%= componentName %>.css';

export default class <%= componentName %> extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <div className='<%= componentName %>'>
        This is the <%= componentName %> component.
      </div>
    );
  }
}

