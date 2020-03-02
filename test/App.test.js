import React from 'react';
import { render,screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Login from '../src/components/Login.react';

expect.extend({toBeInTheDocument})
//test('renders learn react link', () => {
test('renders 无敌魔女 react dom text', () => {
  const { getByText } = render(<Login />);
  //const linkElement = getByText(/无敌魔女/i);
  const linkElement = screen.queryByText(/无敌魔女/i);
  const text = screen.getByText(/无敌魔女/i);
  expect(text).toBeDefined();
  expect(linkElement).toBeInTheDocument();
});
