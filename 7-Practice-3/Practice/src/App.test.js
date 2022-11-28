import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './App';

describe("App component", () => {
  test("Contains hello world in h1", () => {
    const component = renderer.create(<App/>);
    const instance = component.root;

     // get element by node type (h1)
    const element = instance.findByType("h1");

    // assert that text includes Hello World
    expect(element.children.includes('Hello World')).toBe(true);
  })
})