import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '.';
import ContactForm from './ContactForm';

const TEST_VALUE = 'test';

describe('Contact', () => {
  it('should render contact page', () => {
    const { container } = render(<Contact />);

    expect(container).toMatchSnapshot();
  });

  it('should render contact form', () => {
    const { container } = render(<ContactForm />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly change inputs', () => {
    render(<ContactForm />);

    const name: HTMLInputElement = screen.getByTestId('name');
    const email: HTMLInputElement = screen.getByTestId('email');
    const message: HTMLTextAreaElement = screen.getByTestId('message');
    fireEvent.change(name, { target: { value: TEST_VALUE } });
    fireEvent.change(email, { target: { value: TEST_VALUE } });
    fireEvent.change(message, { target: { value: TEST_VALUE } });
    expect(name.value).toEqual(TEST_VALUE);
    expect(email.value).toEqual(TEST_VALUE);
    expect(message.value).toEqual(TEST_VALUE);
  });
});
