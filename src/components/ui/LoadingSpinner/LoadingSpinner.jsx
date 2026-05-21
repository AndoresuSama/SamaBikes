import styles from './LoadingSpinner.module.css';

const { wrapper, spinner, wheel, wheelTrack, wheelTread, hub, speedLines, line, label } = styles;

export function LoadingSpinner({ message }) {
  return (
    <div className={wrapper} role="status" aria-live="polite" aria-busy="true">
      <div className={spinner}>
        <div className={speedLines} aria-hidden="true">
          <span className={line} />
          <span className={line} />
          <span className={line} />
        </div>
        <svg className={wheel} viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7a0000" />
              <stop offset="50%" stopColor="#b90e0e" />
              <stop offset="100%" stopColor="#ff3b3b" />
            </linearGradient>
          </defs>
          <circle className={wheelTrack} cx="32" cy="32" r="26" />
          <circle className={wheelTread} cx="32" cy="32" r="26" />
          <circle className={hub} cx="32" cy="32" r="8" />
        </svg>
      </div>
      {message && <p className={label}>{message}</p>}
    </div>
  );
}
