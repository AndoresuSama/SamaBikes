import styles from './ProductCardSkeleton.module.css';

const { card, image, body, line, lineShort, linePrice, button } = styles;

export function ProductCardSkeleton() {
  return (
    <article className={card} aria-hidden="true">
      <div className={image} />
      <div className={body}>
        <div className={`${line} ${lineShort}`} />
        <div className={`${line} ${linePrice}`} />
        <div className={button} />
      </div>
    </article>
  );
}
