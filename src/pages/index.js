import React from 'react';

import { Layout, SEO } from 'components/common';
import { Intro, Repositories } from 'components/sections';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Repositories />
  </Layout>
);

export default IndexPage;
