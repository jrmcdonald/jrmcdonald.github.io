import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGitHubMetadata } from 'hooks/use-github-metadata';
import { Links, Nav, RepositoryGrid, RepositoryItem, RepositorySection, ViewFullWrapper, Wrapper } from './styles';

export const Repositories = () => {
  const gitHubMetadata = useGitHubMetadata();

  return (
    <Wrapper>
      <Nav>
        <Links>
          {[...gitHubMetadata].map(([language]) => (
            <li key={language}>
              <AnchorLink href={`#${language.toLowerCase()}`}>{language}</AnchorLink>
            </li>
          ))}
        </Links>
      </Nav>

      {[...gitHubMetadata].map(([language, repos]) => (
        <RepositorySection key={language}>
          <h3 id={language.toLowerCase()}>{language}</h3>
          <RepositoryGrid>
            {repos.map(({ name, description, url }) => (
              <RepositoryItem key={name}>
                <h4>
                  <AnchorLink href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </AnchorLink>
                </h4>
                <p>{description}</p>
              </RepositoryItem>
            ))}
          </RepositoryGrid>
        </RepositorySection>
      ))}

      <ViewFullWrapper>
        <AnchorLink href="https://github.com/jrmcdonald" target="_blank" rel="noopener noreferrer">
          View full list of repositories
        </AnchorLink>
      </ViewFullWrapper>
    </Wrapper>
  );
};
