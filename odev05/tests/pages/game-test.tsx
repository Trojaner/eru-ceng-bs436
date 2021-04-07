import { mount } from 'enzyme';
import React from 'react';
import Game from '../../src/client/pages/Game';

test('deneme', () =>{
    const driver = mount(<Game />);
    const card = driver.find('.card').at(0);
    card.simulate('click');

    expect(card).toBeDefined();
});