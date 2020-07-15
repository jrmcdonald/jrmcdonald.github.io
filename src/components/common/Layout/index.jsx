import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/common/Container';
import { Header, Footer } from 'components/theme';
import { Global } from './styles';

export const Layout = ({ children }) => (
  <>
    <Global />
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
