import React from 'react';
import PropTypes from 'prop-types';
import './<%= componentName %>.scss';

class <%= componentName %> extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor() {
        super();
    }

    state = {};

    render() {
        return (
            <div className='<%= componentName %>'>
                This is the <%= componentName %> component.
            </div>
        );
    }
}

export default <%= componentName %>;
