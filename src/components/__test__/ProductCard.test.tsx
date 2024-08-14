import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Product } from '@/utils/api';

const product: Product = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product description.',
  price: 99.99,
  currency: 'USD',
  image: 'https://via.placeholder.com/600/92c952',
  rating: 4.5,
};

describe('ProductCard', () => {
  it('renders product details correctly', () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/This is a test product description/)).toBeInTheDocument();
    expect(screen.getByText(/\$99.99/)).toBeInTheDocument();
    expect(screen.getByText(/★★★★☆/)).toBeInTheDocument();
  });

  it('renders "Add to Cart" button', () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    const addToCartButton = screen.getByText('Add to Cart');
    expect(addToCartButton).toBeInTheDocument();
  });
});
