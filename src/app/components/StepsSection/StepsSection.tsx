import styles from './WhatYouNeed.module.css';

export default function Instructions() {
    return (
      <section className={styles.container}>
        <div className={styles.instructionsSection}>
          <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <div>
                <p className={styles.subtitle}>За 3 минуты +200 подписчиков</p>
                <h2 className={styles.title}>Что нужно от вас?</h2>
                </div>
                
                <div className={styles.logo}>
                    <img src="/logos/InfluxAI.svg" alt="Influx AI Logo" />
                </div>

            </div>
            <div className={styles.rightContent}>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepText}>
                    <h4>Прикрепите ссылку на Instagram</h4>
                    <p>Наш ИИ изучит всю информацию и сформирует твой персональный портрет, а также поймет, что нравилось вашей аудитории</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepText}>
                    <h4>Получите сценарий</h4>
                    <p>Наш ИИ предложит сценарии, музыку и раскадровку под все рилс</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepText}>
                    <h4>Начните снимать</h4>
                    <p>Снимите видео с предложенными сценариями и попадайте в тренды</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
