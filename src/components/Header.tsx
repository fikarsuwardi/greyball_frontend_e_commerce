"use client";

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import React, { ReactNode } from 'react';

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.totalAmount;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
    <h1 className="text-2xl font-bold">My Store</h1>
    <div className="flex space-x-4">
      <span className="font-semibold">Cart: {totalItems} items</span>
      <span className="font-semibold">
        Total: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice)}
      </span>
    </div>
  </header>
  );
};

export default Header;
