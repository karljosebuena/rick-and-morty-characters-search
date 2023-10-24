import { render, screen } from '@testing-library/react';
import SearchBarComponent from '@/components/SearchBar';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn()
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => jest.fn()
}));

describe.skip('SearchBarComponent', () => {
  it('should have Search character(s) text', () => {
    render(SearchBarComponent());

    const text = screen.getByText(/Search character(s) text/i);
    expect(text).toBeInTheDocument();
  });
});
