import React from 'react';

import { Layout, SEO } from 'components/common';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>NOT FOUND</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
