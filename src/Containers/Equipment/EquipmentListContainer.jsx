import { EquipmentList } from './EquipmentList';

const accessories = [
  { name: 'Casco Integral Nexo', price: '$28.500', image: '/assets/casco_integral_nexo.jpg' },
  { name: 'Guantes de cuero', price: '$9.200', image: '/assets/guantes_cuero_moto.jpg' },
  { name: 'Campera moto (impermeable)', price: '$42.000', image: '/assets/campera_moto_impermeable.jpg' },
  { name: 'Candado de disco', price: '$6.800', image: '/assets/Candado_para_Disco.jpg' },
  { name: 'Soporte movil', price: '$3.400', image: '/assets/soporte_movil.jpg' },
  { name: 'Botas de ruta', price: '$31.000', image: '/assets/botas_de_ruta.jpg' },
];

export const EquipmentListContainer = ({ onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  return <EquipmentList items={accessories} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} onSelectProduct={onSelectProduct} />;
};
