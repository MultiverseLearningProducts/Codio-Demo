import React from 'react';
import renderer from 'react-test-renderer';

import { Intro } from './src/App';
import { Main } from './src/App';


test('Intro renders "My name is {props.name}" in an h3', () => {
    const {root: johnInstance} = renderer.create(<Intro name="John"/>);
    // assert that h3 includes 'My name is John'
    expect(johnInstance.findByType("h3").children.join('')).toBe('My name is John');

    const {root: sallyInstance} = renderer.create(<Intro name="Sally"/>);
    // assert that h3 includes 'My name is Sally'
    expect(sallyInstance.findByType("h3").children.join('')).toBe('My name is Sally');
})

import React from 'react';
import renderer from 'react-test-renderer';

import { Main } from './src/App';

test('Main renders  "I have experience in {props.experience}" in a p', () => {
    const {root: jsInstance} = renderer.create(<Main experience="Javascript"/>);
    // assert that p includes 'I have experience in Javascript'
    expect(jsInstance.findByType("p").children.join('')).toBe('I have experience in Javascript');

    const {root: expressInstance} = renderer.create(<Main experience="Express"/>);
    // assert that p includes 'I have experience in Express'
    expect(expressInstance.findByType("p").children.join('')).toBe('I have experience in Express');
});
