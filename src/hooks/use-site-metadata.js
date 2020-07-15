import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            url
            links {
              id
              name
              link
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
