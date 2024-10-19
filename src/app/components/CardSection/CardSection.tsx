import styles from './CardSection.module.css';

export default function CardSection() {
  return (
    <section className={styles.cardSection}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img src="/image.png" alt="Logotype"  />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Анализ трендов</h3>
          <p className={styles.cardParagraph}>Собираем все последние актуальные тренды, которые набрали просмотры</p>
          <button className={styles.cardButton}>Получить тренды</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img src="/image2.png" alt="Logotype" />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Анализ вашего профиля</h3>
          <p className={styles.cardParagraph}>Анализируем ваш профиль — текст, музыку, видео, изображения</p>
          <button className={styles.cardButton}>Начать анализ профиля</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img src="/image3.png" alt="Logotype"   />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Генерация сценариев</h3>
          <p className={styles.cardParagraph}>Создаем раскадровку, сценарий, музыку и примеры похожих роликов</p>
          <button className={styles.cardButton}>Сгенерировать</button>
        </div>
      </div>
    </section>
  );
}
