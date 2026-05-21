import styles from './AdvisorSkeleton.module.css';

const { block, line, name, role, link } = styles;

export function AdvisorSkeleton() {
  return (
    <div className={block} aria-hidden="true">
      <div className={`${line} ${name}`} />
      <div className={`${line} ${role}`} />
      <div className={`${line} ${link}`} />
      <div className={`${line} ${link}`} />
    </div>
  );
}
