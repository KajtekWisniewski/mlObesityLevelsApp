import Image from 'next/image';
import Link from 'next/link';
import styles from './generalStyles.module.scss';

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.homePage}>
        <div className={styles.homePageContent}>
          <div className={styles.header}>
            <div className={styles.titleHeader}>
              <h1>Welcome to the Obesity Level Detector</h1>
              <h3>by Kajetan Wiśniewski</h3>
            </div>
            <div className={styles.aboutHeader}>
              <h2>
                This is a student project with the only purpose being academic work
              </h2>
              <Link
                className={styles.linkStyle}
                href={`https://my.clevelandclinic.org/health/diseases/21989-class-iii-obesity-formerly-known-as-morbid-obesity`}
              >
                <h2>
                  All the rights to the content from /about page of the site belongs to
                  original authors
                </h2>
              </Link>
            </div>
          </div>
          <div className={styles.paragraphs}>
            <p>
              The Obesity Level Detector is an advanced tool designed to assess and
              categorize obesity levels using state-of-the-art machine learning
              technology. Unlike traditional methods that typically rely solely on Body
              Mass Index (BMI) calculations, this tool incorporates a variety of factors
              including genetic predispositions, lifestyle choices, dietary habits, and
              more to provide a more accurate and personalized obesity assessment.
            </p>
            <p>
              Obesity is a complex disease influenced by multiple interrelated factors.
              Traditional algorithms, which often use rigid thresholds based on BMI, can
              fail to account for individual variations such as muscle mass, bone
              density, and overall body composition. Machine learning models, on the
              other hand, can learn from large datasets containing diverse population
              samples to discern patterns and predictors of obesity that go beyond
              simple height and weight measurements.
            </p>
            <p>
              Utilizing machine learning for obesity detection makes sense because it
              allows for the incorporation of complex and nonlinear relationships
              between various predictors and obesity outcomes. These models can adapt
              and improve over time as they are fed more data, making them more robust
              and accurate. The ability to analyze vast arrays of data quickly and
              efficiently means that machine learning models can provide insights and
              diagnostic precision that traditional methods cannot match.
            </p>
            <Link className={styles.linkStyle} href={`/evaluate/`}>
              <h2>Click here to find out what category you fall into</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
