"use client";

import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/cartSlice';
import { Product } from '@/utils/api';
import Image from 'next/image';
import React, { ReactNode } from 'react';

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      <Image src={product.image} alt={product.title} width={200} height={200} className="mb-4" />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600">
        {product.description && product.description.length > 100
          ? product.description.substring(0, 100) + '...'
          : product.description || 'No description available.'}
      </p>
      <div className="mt-2">
        <span className="text-lg font-bold">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: product.currency || 'USD',
          }).format(product.price)}
        </span>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
