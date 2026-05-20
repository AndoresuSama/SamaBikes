import React from 'react';
import { Header } from '../Header/Header';
import { Main } from '../../Containers/Main/Main';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.css';

export const Layout = ({ children, cartCount, onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  return (
    <div className={styles.layout}>
      <Header cartCount={cartCount} />
      <Main onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} onSelectProduct={onSelectProduct}>{children}</Main>
      <Footer />
    </div>
  );
};
