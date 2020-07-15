import { useStaticQuery, graphql } from 'gatsby';

const sortByRepoName = (firstRepo, secondRepo) => {
  if (firstRepo.name < secondRepo.name) return -1;
  if (firstRepo.name > secondRepo.name) return 1;
  return 0;
};

export const useGitHubMetadata = () => {
  const {
    github: {
      repos: { edges },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          repos: search(query: "user:jrmcdonald archived:false", type: REPOSITORY, first: 100) {
            edges {
              node {
                ... on GitHub_Repository {
                  name
                  description
                  languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  const metadata = new Map();

  edges.forEach(({ node }) => {
    const { name, description, url, languages } = node;

    const primaryLanguage = languages.edges.map((edge) => edge.node.name)[0];

    if (primaryLanguage !== undefined) {
      if (!metadata.has(primaryLanguage)) {
        metadata.set(primaryLanguage, []);
      }
      const repo = {
        name,
        description,
        url,
      };

      metadata.get(primaryLanguage).push(repo);
    }
  });

  metadata.forEach((language) => language.sort(sortByRepoName));

  return metadata;
};
