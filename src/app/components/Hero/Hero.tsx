import styles from './Hero.module.css';
import { Button } from 'antd';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.languageSwitch}>
        <Button className={styles.languageButton}>En</Button>
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <img src="/Logo.png" alt="Logotype" className={styles.logo} />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/frame1.png"
              alt="Frame 1"
              className={`${styles.frame} ${styles.frame1}`}
            />
            <img
              src="/frame2.png"
              alt="Frame 2"
              className={`${styles.frame} ${styles.frame2}`}
            />
            <img
              src="/frame3.png"
              alt="Frame 3"
              className={`${styles.frame} ${styles.frame3}`}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.headingWrapper}>
              <h1 className={styles.title}>
                Создавайте вирусные <span>Reels</span>
              </h1>
            </div>
            <div className={styles.descriptionWrapper}>
              <p className={styles.subtitle}>
                По последним актуальным трендам за несколько минут и набирайте{' '}
                <span>200-1000 подписчиков</span> в неделю
              </p>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button type="primary" size="large" className={styles.ctaButton}>
              Создать Reel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
