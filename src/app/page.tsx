import ProductCard from '@/components/ProductCard';
import { Product } from '@/utils/api';
import React, { ReactNode } from 'react';

async function fetchProducts(page: number, searchTerm: string = '', sort: string = '') {
  let url = `https://my-json-server.typicode.com/fikarsuwardi/my-json-server/posts?_limit=10&_page=${page}`;
  
  if (searchTerm) {
    url += `&q=${searchTerm}`;
  }

  if (sort) {
    url += `&_sort=${sort}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const page = parseInt(searchParams.page || '1', 10);
  const searchTerm = searchParams.search || '';
  const sort = searchParams.sort || '';
  
  const products = await fetchProducts(page, searchTerm, sort);

  return (
    <div>
      <div className="container mx-auto p-4">
        <form method="get" className="mb-4">
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            defaultValue={searchTerm}
            className="p-2 border rounded w-full"
          />
          <select
            name="sort"
            defaultValue={sort}
            className="mt-2 p-2 border rounded w-full"
          >
            <option value="">No Sorting</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Search
          </button>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-between mt-8">
          {page > 1 && (
            <a
              href={`/?page=${page - 1}&search=${searchTerm}&sort=${sort}`}
              className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors ease-in-out duration-300"
            >
              Previous
            </a>
          )}
          {products.length === 10 && (
            <a
              href={`/?page=${page + 1}&search=${searchTerm}&sort=${sort}`}
              className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors ease-in-out duration-300 ml-auto"
            >
              Next
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

