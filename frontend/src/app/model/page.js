import styles from '../generalStyles.module.scss';

export default function ModelPage() {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.article}>
        <h1>Dokumentacja modelu</h1>
        <p>
          Model machine learningu wykorzystany do tego projektu został napisany z pomocą
          samouczka ze strony
          <a href="https://www.kaggle.com/code/tkunzler/obesity-levels-acc-98-eda/notebook">
            &nbsp;kaggle.
          </a>
        </p>
        <p>Strona poza dokumentacją jest w języku angielskim.</p>
        <pre>
          <code>
            {`function test() {
          console.log("Hello, world!");
        }`}
          </code>
        </pre>
      </div>
      <div className={styles.straightLine}></div>
    </div>
  );
}
