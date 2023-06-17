import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Category from '.';
import CategoryControls from './CategoryControls';

const TEST_VALUE = 'test';

describe('Category', () => {
  it('should render category', () => {
    const { container } = render(<Category category={TEST_VALUE} />);

    expect(container).toMatchSnapshot();
  });

  it('should display correct category', () => {
    render(<Category category={TEST_VALUE} />);

    const title = screen.getByTestId('category');

    expect(title).toHaveTextContent('test');
  });

  it('should render controls correctly', () => {
    const { container } = render(<CategoryControls currentCategory={TEST_VALUE} />);

    expect(container).toMatchSnapshot();
  });

  it('should handle change input', () => {
    render(<CategoryControls currentCategory={TEST_VALUE} />);

    const input: HTMLInputElement = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: TEST_VALUE } });

    expect(input.value).toEqual(TEST_VALUE);
  });

  it('should handle change input', () => {
    render(<CategoryControls currentCategory={TEST_VALUE} />);

    const result = screen.queryByTestId('result');
    expect(result).toBe(null);
    const input: HTMLInputElement = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: TEST_VALUE } });
    const newResult = screen.getByTestId('result');
    expect(newResult).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'business' } });
    const trueResult = screen.getByTestId('true-result');
    expect(trueResult).toHaveTextContent(/business/gi);
  });
});
