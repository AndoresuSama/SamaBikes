import styles from '../PageSection/PageSection.module.css';

const { statusError } = styles;

export function ErrorState({ message }) {
  return <p className={statusError}>{message}</p>;
}
