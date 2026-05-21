import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/cart/CartProvider';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-root">
          <AppRoutes />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
