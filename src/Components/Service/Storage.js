import React from 'react';
import ProductItem from './Storage.js';

const App = () => {
  return (
    <div>
      <ProductItem
        title="Product 1"
        price="19.99"
        imageUrl="path_to_image_1.jpg"
      />
      <ProductItem
        title="Product 2"
        price="29.99"
        imageUrl="path_to_image_2.jpg"
      />
      {/* Add more ProductItem components as needed */}
    </div>
  );
};

export default App;
