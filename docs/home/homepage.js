import React from 'react';
import styles from './homepage.module.css';
import Feature from '../../src/components/Feature';
import Grid from '../../src/components/Grid';
import FooterMenu from '../../src/components/FooterMenu';

const FeatureList = [
  {
    title: 'Redpanda Quickstart',
    image: require('../../static/img/quickstart.png').default,
    description: (
      <>
        Try out Redpanda.
      </>
    ),
    url: '/docs/platform/quickstart/',
    learnText: true,
  },
  {
    title: 'Use rpk',
    image: require('../../static/img/RPK-commands.png').default,
    description: (
      <>
        Browse all commands for running Redpanda.
      </>
    ),
    url: '/docs/platform/reference/rpk',
    learnText: true,
  },
  {
    title: 'Deploy Redpanda',
    image: require('../../static/img/rocket.png').default,
    description: (
      <>
        Install and configure Redpanda.
      </>
    ),
    url: '/docs/platform/deployment/production-deployment',
    learnText: true,
  },
  {
    title: 'Redpanda Console',
    image: require('../../static/img/console-icon.png').default,
    description: (
      <>
        Use the Redpanda Console dashboard to administer clusters and get visibility into your data streams.
      </>
    ),
    url: '/docs/platform/quickstart/console-installation',
    learnText: true,
  },
  {
    title: 'Tiered Storage',
    image: require('../../static/img/cloud-first.png').default,
    description: (
      <>
        Save storage costs by offloading log segments to the cloud.
      </>
    ),
    url: '/docs/platform/data-management/tiered-storage',
    learnText: true,
  },
  {
    title: 'Sizing Guidelines',
    image: require('../../static/img/self-balance.png').default,
    description: (
      <>
        Size your production clusters to maximize performance.
      </>
    ),
    url: 'https://redpanda.com/blog/sizing-redpanda-cluster-best-practices',
    learnText: true,
  },
];

const FooterMenuList = [
  {
    title: 'Get Started',
    icon: require('../../static/img/get-started-icon.png').default,
    items: [
      { text: 'Introduction to Redpanda', url: "" },
      { text: 'How Redpanda Works', url: "" },
      { text: 'Redpanda Licensing', url: "" },
      { text: 'Redpanda Quickstart', url: "" },
      { text: 'Install rpk', url: "" },
      { text: 'Introduction to Redpanda Console', url: "" },
    ],
  },
  {
    title: 'Develop',
    icon: require('../../static/img/develop-icon.png').default,
    items: [
      { text: 'Supported Kafka Clients', url: "" },
      { text: 'Set Up and Use Redpanda with Kafka client libraries', url: "" },
      { text: 'Set Up and Use Redpanda with NodeJS', url: "" },
      { text: 'Set Up and Use Redpanda with HTTP Proxy API', url: "" },
      { text: 'Designing the Data Stream', url: "" },
      { text: 'Producing Data', url: "" },
      { text: 'Consuming Data', url: "" },
      { text: 'Transactions', url: "" },
    ],
  },
  {
    title: 'Deploy',
    icon: require('../../static/img/deploy-icon.png').default,
    items: [
      { text: 'Choosing a Deployment Option', url: "" },
      { text: 'Explore RedPanda Features', url: "" },
      { text: 'Cloud Deployment', url: "" },
      { text: 'Self-Hosted Deployment', url: "" },
    ],
  },
  {
    title: 'Manage',
    icon: require('../../static/img/manage-icon.png').default,
    items: [
      { text: 'Manage Cloud', url: "" },
      { text: 'Managed Self Hosted', url: "" },
      { text: 'Manage RedPanda on Kubernetes', url: "" },
      { text: 'Manage Redpanda Console', url: "" },
      { text: 'Security', url: "" },
      { text: 'Migration', url: "" },
    ],
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Grid gap="2rem" minWidth="300px" title='Most Visited'>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </Grid>
      <Grid gap="3.85rem" minWidth="175px" title='Highlights'>
        {FooterMenuList.map((props, idx) => (
          <FooterMenu key={idx} {...props} />
        ))}
      </Grid>
    </section >
  );
}