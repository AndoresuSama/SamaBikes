import './App.css';
import { Layout } from './Components/Layout/Layout';
import { ProductCard } from './Components/ProductCard/ProductCard';

const products = [
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

const accessories = [
  { name: 'Casco Integral Nexo', price: '$28.500', image: '/assets/casco_integral_nexo.jpg' },
  { name: 'Guantes de cuero', price: '$9.200', image: '/assets/guantes_cuero_moto.jpg' },
  { name: 'Campera moto (impermeable)', price: '$42.000', image: '/assets/campera_moto_impermeable.jpg' },
  { name: 'Candado de disco', price: '$6.800', image: '/assets/Candado_para_Disco.jpg' },
  { name: 'Soporte movil', price: '$3.400', image: '/assets/soporte_movil.jpg' },
  { name: 'Botas de ruta', price: '$31.000', image: '/assets/botas_de_ruta.jpg' },
];

export function App() {
  return (
    <Layout>
      <section className="productSection">
        <div className="sectionHeader">
          <h2>Catálogo destacado</h2>
          <p>Tres motos emblemáticas para recorrer la ciudad con estilo agresivo.</p>
        </div>
        <div className="productGallery">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <section className="productSection">
          <div className="sectionHeader">
            <h2>Equipamento infaltable</h2>
            <p>Equipamento infaltable — imprescindible para ti y tu moto.</p>
          </div>
          <div className="productGallery">
            {accessories.map((item) => (
              <ProductCard key={item.name} name={item.name} price={item.price} image={item.image} />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}

