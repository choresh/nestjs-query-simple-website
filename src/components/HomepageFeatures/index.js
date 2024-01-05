import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'NestJS',
    Svg: require('@site/static/img/nestjs.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'TypeScript',
    Svg: require('@site/static/img/typescript.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'GraphQL',
    Svg: require('@site/static/img/graphql.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'MongoDB',
    Svg: require('@site/static/img/mongodb.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Nestjs-query',
    Svg: require('@site/static/img/nestjs-query.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
