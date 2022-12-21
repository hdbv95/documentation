import React from 'react';
import styles from './homepage.module.css';
import Feature from '../../src/components/Feature';
import Grid from '../../src/components/Grid';
import FooterMenu from '../../../src/components/FooterMenu';

const FeatureList = [
  {
    title: 'Get Started with Redpanda',
    image: require('../../static/img/quickstart.png').default,
    description: (
      <>
        Try out Redpanda.
      </>
    ),
    url: '/docs/platform/quickstart/',
  },
  {
    title: 'Deploying for Production',
    image: require('../../static/img/deployment.png').default,
    description: (
      <>
        Install and configure Redpanda.
      </>
    ),
    url: '/docs/platform/deployment/production-deployment',
  },
  {
    title: 'Redpanda Console',
    image: require('../../static/img/console-docs.png').default,
    description: (
      <>
        Use the Redpanda Console dashboard to administer clusters and get visibility into your data streams.
      </>
    ),
    url: '/docs/platform/quickstart/console-installation',
  },
  {
    title: 'rpk Command Reference',
    image: require('../../static/img/RPK-commands.png').default,
    description: (
      <>
        Browse all commands for running Redpanda.
      </>
    ),
    url: '/docs/platform/reference/rpk',
  },
  {
    title: 'Tiered Storage',
    image: require('../../static/img/try-now.png').default,
    description: (
      <>
        Save storage costs by offloading log segments to the cloud.
      </>
    ),
    url: '/docs/platform/data-management/tiered-storage',
  },
  {
    title: 'Sizing Guidelines',
    image: require('../../static/img/get-started.png').default,
    description: (
      <>
        Size your production clusters to maximize performance.
      </>
    ),
    url: 'https://redpanda.com/blog/sizing-redpanda-cluster-best-practices',
  },
];

const FooterMenuList = [
  {
    title: 'Get Started',
    items: [
      { text: 'Introduction to Redpanda', url: "" },
      { text: 'How Redpanda Works', url: "" },
      { text: 'Redpanda Licensing', url: "" },
      { text: 'Redpanda Quickstart', url: "" },
      { text: 'Install rpk', url: "" },
      { text: 'Explore Redpanda', url: "" },
    ],
  },
  {
    title: 'Develop',
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
    items: [
      { text: 'Choosing a Deployment Option', url: "" },
      { text: 'Explore RedPanda Features', url: "" },
      { text: 'Cloud Deployment', url: "" },
      { text: 'Self-Hosted Deployment', url: "" },
    ],
  },
  {
    title: 'Manage',
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
      <Grid gap="2rem" minWidth="300px">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </Grid>
      <Grid gap="3.85rem" minWidth="175px">
        {FooterMenuList.map((props, idx) => (
          <FooterMenu key={idx} {...props} />
        ))}
      </Grid>
    </section >
  );
}