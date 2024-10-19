import styles from './GuideOffer.module.css';

export default function GuideOffer() {
    return (
        <section className={styles.guideSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.imageLeft}>
                    <img src="/left.png" alt="Guide Left" />
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Получите в подарок гайд по продвижению рилсов
                    </h2>
                    <p className={styles.subtitle}>
                        Начните генерировать сценарии вместе с нами и получите в подарок гайд по продвижению
                    </p>
                    <div className={styles.starLeft}></div>
                    <div className={styles.starRight}></div>
                    <button className={styles.ctaButton}>
                        Войти и получить подарок
                    </button>
                </div>
                <div className={styles.imageRight}>
                    <img src="/right.png" alt="Guide Right" />
                </div>
            </div>
        </section>
    );
}
