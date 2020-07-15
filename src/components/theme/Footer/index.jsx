import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSiteMetadata } from 'hooks/use-site-metadata';
import { Wrapper, Nav, Links, Copyright } from './styles';

export const Footer = () => {
  const { author, url, links } = useSiteMetadata();

  return (
    <Wrapper>
      <Nav>
        <Links>
          {links.map(({ id, name, link }) => (
            <li key={id}>
              <AnchorLink href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </AnchorLink>
            </li>
          ))}
        </Links>
        <Copyright>
          &copy; {new Date().getFullYear()}{' '}
          <AnchorLink href={url} target="_blank" rel="noopener noreferrer">
            {author}
          </AnchorLink>
          . All rights reserved.
        </Copyright>
      </Nav>
    </Wrapper>
  );
};
