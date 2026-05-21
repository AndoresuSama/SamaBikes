import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { BikesPage } from '../pages/BikesPage';
import { CartPage } from '../pages/CartPage';
import { ContactPage } from '../pages/ContactPage';
import { EquipmentPage } from '../pages/EquipmentPage';
import { HomePage } from '../pages/HomePage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="motos" element={<BikesPage />} />
        <Route path="equipamiento" element={<EquipmentPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="carrito" element={<CartPage />} />
        <Route path="producto/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  );
}
