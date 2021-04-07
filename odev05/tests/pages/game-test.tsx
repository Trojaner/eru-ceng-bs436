import { mount } from 'enzyme';
import React from 'react';
import Game from '../../src/client/pages/Game';

test('kart sayısı', () =>{

    const driver = mount(<Game />);

    const kart = driver.find('.kart');
    expect(kart.length).toBe(3);

});

test('kart seçme', () =>{

    const driver = mount(<Game />);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    const srcName = card.find("img").prop("src");

    expect(srcName === 'img/Kedi.jpg' || srcName === 'img/Kopek.jpg').toBeTruthy();

});

test('durum mesajı', () =>{

    const driver = mount(<Game />);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    const durum = card.find("p");

    expect(durum).toBeDefined();
});

test('yeni oyun', () =>{

    const driver = mount(<Game />);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);

    let link = driver.find('.link');
    link.simulate('click');
    link = driver.find('.link');
    link = link.find("span");

    expect(link).toBeDefined();
});