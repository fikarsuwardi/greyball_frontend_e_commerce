# E-commerce Product Listing

This is a Next.js-based e-commerce product listing application featuring server-side rendering, state management with Redux, and styling with Tailwind CSS.

## Features

- **Next.js**: Utilizes the latest version with the App Router for efficient page routing and server-side rendering.
- **TypeScript**: Ensures type safety and code reliability throughout the application.
- **Tailwind CSS**: Provides a responsive and modern user interface, with easy customization.
- **Redux**: Manages the global state, including a shopping cart that tracks the total number of items and the total price.
- **Product Listing**: Displays products in a grid layout, fetching data server-side from a JSON API endpoint.
- **Search and Sort**: Implements real-time search filtering by product title and sorting by price or rating.
- **Pagination**: Supports pagination or infinite scrolling to load more products.
- **SEO Metadata**: Dynamically generates SEO metadata for better search engine optimization.

## Known Issues

- **Jest Testing**: Tests are implemented, but there were initial setup challenges with Jest and TypeScript. Please ensure all necessary modules are installed before running tests.
- **Browser Compatibility**: The application has been tested on modern browsers. However, further testing on older browsers may be needed.
- **Performance**: While the app performs well for a small number of products, performance testing with larger datasets is recommended.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce-product-listing
