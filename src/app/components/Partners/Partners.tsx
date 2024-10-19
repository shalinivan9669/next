import styles from './Partners.module.css';

export default function Partners() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.line}></div>
      <div className={styles.textWrapper}>
        <p className={styles.description}>
          Нам доверяют ведущие <br />
          компании по всему миру
        </p>
      </div>
      <div className={styles.logoWrapper}>
        <img src="/logos/Snapchat.svg" alt="Snapchat" className={styles.logo} />
        <img src="/logos/Amazon.svg" alt="Amazon" className={styles.logo} />
        <img src="/logos/Yango.svg" alt="Yango" className={styles.logo} />
        <img src="/logos/Meta.svg" alt="Meta" className={styles.logo} />
        <img src="/logos/Revolut.svg" alt="Revolut" className={styles.logo} />
      </div>
    </section>
  );
}
