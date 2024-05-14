import React from 'react';
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

it('performs snapshot testing', () => {
  const tree = renderer.create(<HelloWorld />).toJSON();
  expect(tree).toMatchSnapshot();
});