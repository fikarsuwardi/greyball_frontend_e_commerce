import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Header', () => {
  it('displays the correct cart total items and price', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText(/Cart: 0 items/)).toBeInTheDocument();
    expect(screen.getByText(/Total: \$0.00/)).toBeInTheDocument();
  });
});
