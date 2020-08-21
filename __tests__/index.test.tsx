import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux';
import IndexPage from '../pages/index';

describe('Pages', () => {
    describe('Index', () => {
        it('should render without throwing an error', function () {
            const wrap = mount(<Provider store={store}><IndexPage /></Provider>);
            expect(wrap.find('h1').text()).toBe('Hi, I\'m Anthony!');
        })
    })
})