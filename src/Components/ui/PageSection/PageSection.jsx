import styles from './PageSection.module.css';

const { section, header, title, description } = styles;

export function PageSection({ title: pageTitle, description: pageDescription, children }) {
  return (
    <section className={section}>
      {(pageTitle || pageDescription) && (
        <header className={header}>
          {pageTitle && <h1 className={title}>{pageTitle}</h1>}
          {pageDescription && <p className={description}>{pageDescription}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
