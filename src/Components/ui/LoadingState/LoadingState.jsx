import styles from '../PageSection/PageSection.module.css';

const { status } = styles;

export function LoadingState({ message = 'Cargando...' }) {
  return <p className={status}>{message}</p>;
}
