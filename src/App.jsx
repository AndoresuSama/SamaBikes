import React, { useState } from 'react';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import { ProductDetails } from './Components/ProductDetails/ProductDetails';

export function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = () => {
    setCartCount((count) => count + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount((count) => Math.max(0, count - 1));
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  return (
    <Layout
      cartCount={cartCount}
      onAddToCart={handleAddToCart}
      onRemoveFromCart={handleRemoveFromCart}
      onSelectProduct={handleSelectProduct}
    >
      {selectedProduct && <ProductDetails product={selectedProduct} onBack={handleBackToList} />}
    </Layout>
  );
}

