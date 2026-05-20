import { BikesList } from './BikesList';

const bikes = [
  {
    name: 'Yamaha MT-07 ABS',
    price: '$1.350.000',
    image: '/assets/yamaha_mt07.jpg',
  },
  {
    name: 'KTM 390 Duke',
    price: '$2.490.000',
    image: '/assets/KTM_390.jpg',
  },
  {
    name: 'Bajaj Dominar 400',
    price: '$1.090.000',
    image: '/assets/dominar_400.jpg',
  },
];

export const BikesListContainer = ({ onAddToCart, onRemoveFromCart, onSelectProduct }) => {
  return <BikesList bikes={bikes} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} onSelectProduct={onSelectProduct} />;
};
