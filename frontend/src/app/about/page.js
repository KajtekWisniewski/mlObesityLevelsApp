import styles from '../generalStyles.module.scss';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.article}>
        <h1>Overview</h1>

        <p>
          This website has been created to help you find out if you have a problem with
          your weight using a machine learning model trained on a dataset of 10 000
          samples. The model can help you determine if you have an insufficient weight,
          normal weight, slight overweight or obesity level from range I-III with level
          III being morbid obesity.
        </p>

        <h2>What is morbid obesity (now known as class III obesity)?</h2>
        <p>
          Class III obesity, formerly known as morbid obesity, is a complex chronic
          disease in which a person has a body mass index (BMI) of 40 or higher or a BMI
          of 35 or higher and is experiencing obesity-related health conditions. The BMI
          scale is not always accurate, so healthcare providers may use other tests and
          tools to assess obesity, such as measuring waist circumference.
        </p>
        <p>
          Class III obesity can contribute to the development of several serious health
          conditions, such as Type 2 diabetes and heart disease. The good news is that
          class III obesity is manageable and treatable.
        </p>

        <h2>Why was class III obesity called morbid obesity?</h2>
        <p>
          The term “morbid obesity” was coined by two healthcare providers in 1963 in
          order to justify insurance reimbursement for the cost of intestinal bypass
          surgery for weight loss in people with a BMI over 40.
        </p>
        <p>
          In a medical setting, “morbidity” means illness or disease. Healthcare
          professionals also often use the term “comorbidity,” which means that an
          individual has more than one illness or disease occurring at the same time.
          The medical meaning of “morbid” is appropriate in describing this type of
          obesity since class III obesity is considered a disease and is often
          associated with other chronic health conditions.
        </p>
        <p>
          The problem is that, like many words, “morbid” has another meaning. Outside of
          the medical setting, “morbid” means disturbing or unpleasant. Since most
          people aren’t familiar with the medical definition, they connected morbid
          (class III) obesity and people with obesity to those negative words. The use
          of “morbid” in describing obesity adds to the false and problematic societal
          stigma that suggests that people with obesity lack the willpower to lose
          weight, when this is almost always not the case.
        </p>
        <p>
          Now, healthcare providers, researchers and health organizations, such as the
          World Health Organization (WHO), use the term “class III obesity” in place of
          “morbid obesity.”
        </p>

        <h2>What is and why not just use the body mass index (BMI)?</h2>
        <p>
          Body mass index (BMI) is a screening tool that measures the ratio of your
          height to your weight. Healthcare providers calculate BMI by using weight in
          kilograms (kg) divided by the square of height in meters (m2). In most people,
          BMI relates to body fat, but it’s not accurate in some cases. BMI alone does
          not diagnose body fatness or health. Healthcare providers use BMI and other
          tools and tests to assess someone’s health status and risks.
        </p>
        <p>The following BMI ranges (in kg/m2) classify different weight types:</p>
        <ul>
          <li>Underweight: Less than 18.5.</li>
          <li>Optimum range: 18.5 to 24.9.</li>
          <li>Overweight: 25 to 29.9.</li>
          <li>Class I obesity: 30 to 34.9.</li>
          <li>Class II obesity: 35 to 39.9.</li>
          <li>Class III obesity: More than 40.</li>
        </ul>

        <p>
          BMI is not always an accurate representation of an individual’s health. For
          example, if you have more or less muscle than what is considered optimal, your
          BMI may not be an accurate measurement of how much body fat you have. In
          addition, you could have health conditions that are highly associated with
          having class III obesity, such as Type 2 diabetes or high blood pressure,
          without having obesity.
        </p>
        <p>The standard BMI scale is often not accurate for the following people:</p>
        <ul>
          <li>
            Bodybuilders and professional athletes: Since muscle is more dense than fat,
            people who are very muscular may have a high BMI even though they have
            optimal levels of fat.
          </li>
          <li>
            People older than 65: For people over the age of 65, it's often better to
            have a BMI between 25 and 27, rather than under 25. This is because a
            slightly higher BMI may help protect them from developing weakened bones
            (osteoporosis).
          </li>
          <li>
            Children: While many children have obesity, you shouldn't use the standard
            BMI chart to evaluate a child’s weight. Talk to your child's healthcare
            provider about the optimum weight range for your child's age and height.
          </li>
        </ul>
        <p>
          The standard BMI scale may also be inaccurate for people of different races
          when assessing their risk for certain health conditions. Studies have shown
          that, in general, people of Asian descent are more likely to have health risks
          at a much lower BMI, and Black people are more at risk for health issues at a
          higher BMI than what is considered at-risk in the standard scale.
        </p>
        <p>
          As an example of BMI inaccuracies according to race, the standard cutoff BMI
          number associated with a higher risk of developing Type 2 diabetes (T2D)
          varies for people of different races. Differences include:
        </p>
        <ul>
          <li>
            A BMI of 23.9 and or above is linked to a higher risk of T2D for people of
            South Asian descent.
          </li>
          <li>
            A BMI of 26 or above is linked to a higher risk of T2D for people of Arabic
            descent.
          </li>
          <li>
            A BMI of 28 or above is linked to a higher risk of T2D for Black people.
          </li>
          <li>
            A BMI of 30 or above is linked to a higher risk of T2D for white people.
          </li>
        </ul>
        <h3>
          Therefore it makes sense to use a machine learning model to detect obesity
          levels based on provided data instead.{' '}
          <Link className={styles.linkStyle} href={`/evaluate/`}>
            <h3>Go here to find out if you have a problem</h3>
          </Link>
        </h3>
        <h2>
          What is the difference between having obesity and having class III obesity?
        </h2>
        <p>
          In most — but not all — cases, adults with a body mass index (BMI) of 30 to
          39.9 are considered to have obesity. Adults with a BMI of 40 or higher are
          considered to have class III obesity.
        </p>

        <h2>Who does class III obesity affect?</h2>
        <p>
          Anyone can develop class III obesity, including children and adults. However,
          due to its complexity, class III obesity tends to affect people differently.
          Based on a study on the prevalence (commonness) of class III obesity in adults
          in the United States between 2017 and 2018, here’s how class III obesity
          affects different people:
        </p>
        <ul>
          <li>
            Sex: Approximately 11.5% of women and people assigned female at birth have
            class III obesity compared to 6.9% of men and people assigned male at birth.
          </li>
          <li>
            Age: Class III obesity affects 11.5% of adults aged 40 to 59, 9.1% of adults
            aged 20 to 39 and 5.8% of adults aged 60 and over.
          </li>
          <li>
            Race: Non-Hispanic Black adults had the highest prevalence of class III
            obesity at 13.8%, and non-Hispanic Asian adults had the lowest at 2.0%.
          </li>
        </ul>

        <h2>How common is class III obesity?</h2>
        <p>
          Class III obesity is a common condition. Approximately 9% of adults in the
          United States had class III obesity from 2017 to 2018.
        </p>

        <h1>Symptoms and Causes</h1>

        <h2>What causes class III obesity?</h2>
        <p>
          Class III obesity is a complex disease that has several contributing factors.
          The main cause of why your body stores fat is that there’s an imbalance
          between the number of calories (energy) you consume and the number of calories
          (energy) your body uses. In other words, consuming more calories than your
          body uses for essential bodily processes, such as digestion and breathing, and
          for physical activity in a day causes your body to store fat, resulting in
          weight gain.
        </p>
        <p>
          However, there are several other factors that contribute to how much food we
          eat, the type of food we eat, and how our body uses that energy. Every
          person’s body is unique and metabolizes energy differently. Some people are at
          a greater risk of weight gain than others, and class III obesity is rarely
          caused by a lack of willpower to lose weight or a lack of “control” in the
          amount of food you eat.
        </p>
        <p>Several factors contribute to developing obesity, including:</p>
        <ul>
          <li>
            Genetic factors: Several studies have shown that obesity can run in families
            and that multiple genes are associated with weight gain.
          </li>
          <li>
            Hormone imbalances: Your body makes hundreds of hormones that each have
            unique and important functions. Many of those hormones can affect how your
            body signals that you need food and how your body uses energy. For example,
            cortisol (often called the stress hormone) stimulates your fat and
            carbohydrate metabolism, creating a surge of energy in your body. While this
            process is essential for survival (fight-or-flight) situations, it also
            increases your appetite. If you experience chronic stress, it can
            chronically increase your cortisol levels and increase your appetite and
            cravings for sweet, fatty, and salty foods, which can lead to weight gain.
            Another example is low thyroid hormone levels (hypothyroidism). Thyroid
            hormone is essential for maintaining your body’s metabolism. If you have
            lower-than-normal levels of thyroid hormone, it can slow down your
            metabolism and cause weight gain.
          </li>
          <li>
            Socioeconomic and geographical factors: Having a low socioeconomic status
            and having easier financial and/or geographical access to unhealthy fast
            foods as compared to healthier whole foods can contribute to developing
            obesity. Having limited access to recreational facilities or parks and few
            safe or easy ways to walk in your neighborhood can also contribute to
            developing obesity.
          </li>
          <li>
            Cultural factors: Prevalent marketing and advertising for calorie-dense
            foods and increased portion sizes can contribute to developing obesity.
          </li>
          <li>
            Environmental factors: Exposure to chemicals known as obesogens can change
            your hormones and increase fatty tissue in your body.
          </li>
        </ul>
      </div>
      <div className={styles.straightLine}></div>
    </div>
  );
}
