import React from 'react';
import { shallow }  from 'enzyme';
import 'src/utils/bootTests'; // order matters!
import Content from './Content';
import Adapter from 'enzyme-adapter-react-16';


describe('<Content />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Content toggleMenu={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});

