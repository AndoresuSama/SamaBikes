import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import styles from '../PageSection/PageSection.module.css';

const { status } = styles;

export function LoadingState({ message = 'Cargando...' }) {
  return (
    <div className={status}>
      <LoadingSpinner message={message} />
    </div>
  );
}
