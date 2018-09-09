import React from 'react';
import Layout from '../Layout';
import { shallow } from 'enzyme';

describe('Layout component', () => {

    test('renders the Layout wrapper', () => {
        const layout = shallow(<Layout />);
        expect(layout).toMatchSnapshot();
    });
});