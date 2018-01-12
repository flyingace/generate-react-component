import React from 'react';
import <%= componentName %>  from '../<%= componentName %>.jsx';
//import { renderIntoDocument } from 'react-addons-test-utils';

describe('<%= componentName %>', () => {

    let component, sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
        component = renderIntoDocument(<<%= componentName %> />);
    });

    after(() => {
        sandbox.restore();
    });

    it('should render', () => {
        expect(component).to.be.ok;
    });
});
