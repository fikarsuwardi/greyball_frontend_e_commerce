"use client";

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import '@/styles/globals.css';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header /> 
          <main className="pt-16">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
