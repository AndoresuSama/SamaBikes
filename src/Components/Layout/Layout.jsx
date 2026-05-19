import React from 'react';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
