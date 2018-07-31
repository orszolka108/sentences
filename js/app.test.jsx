import React from 'react';
import App from './app.jsx';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe ('<App />', () => {
    it('renders 1 <App /> component', () => {
        const component = shallow(<App />);
        expect(component).toHaveLength(1);
    })
})
