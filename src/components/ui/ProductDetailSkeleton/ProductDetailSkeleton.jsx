import styles from './ProductDetailSkeleton.module.css';

const { details, back, card, image, info, line, title, price, text, button } = styles;

export function ProductDetailSkeleton() {
  return (
    <div className={details} aria-busy="true" aria-label="Cargando detalle del producto">
      <div className={back} />
      <div className={card}>
        <div className={image} />
        <div className={info}>
          <div className={`${line} ${title}`} />
          <div className={`${line} ${price}`} />
          <div className={`${line} ${text}`} />
          <div className={`${line} ${button}`} />
        </div>
      </div>
    </div>
  );
}
