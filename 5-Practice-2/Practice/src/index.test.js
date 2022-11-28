import React from 'react';
import renderer from 'react-test-renderer';

import { App, Welcome, Body } from './src/App';


test("Welcome - Renders h1 and p with 'Welcome to my React App' in h1 and 'Technologies Ive learned so far' in p tag", () => {
    const component = renderer.create(<Welcome/>);
    const instance = component.root;

    // get h1 element
    const h1 = instance.findByType("h1");

    // assert that text includes Welcome to my React App
    expect(h1.children.includes('Welcome to my React App')).toBe(true);

    // get paragraph element
    const paragraph = instance.findByType("p");

    // assert that text includes Technologies Ive learned so far
    expect(paragraph.children.includes('Technologies Ive learned so far')).toBe(true);
})

test("Body component - Contains UL with 3 child elements.", () => {
    const component = renderer.create(<Body/>);
    const instance = component.root;

    // get element by node type
    const element = instance.findByType("ul");

    // assert that ul has 3 list items
    expect(element.children.length).toBe(3);
})

test("App component - Renders Welcome and Body components", () => {
    const component = renderer.create(<App/>);
    const instance = component.root;

    // expect components to be rendered in App
    expect(instance.findByType(Welcome)).toBeTruthy();
    expect(instance.findByType(Body)).toBeTruthy();
})