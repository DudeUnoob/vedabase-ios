// import * as React from 'react';
// import renderer from 'react-test-renderer';
const { Home } = require('../Home');
const renderer = require('react-test-renderer');
const jest = require('jest');
const sum = require('./simple');

test('renders correctly', () => {
  const tree = renderer.create(Home).toJSON();
  expect(tree).toMatchSnapshot();
});
