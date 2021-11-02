import React from 'react';
import PropTypes from 'prop-types';
import * as S from './<%= componentName %>.styles';

export default class <%= componentName %> extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <div className="">
        This is the <%= componentName %> component.
      </div>
    );
  }
}
