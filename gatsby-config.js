require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Jamie McDonald`,
    description: `The project portfolio of Jamie McDonald`,
    author: `Jamie McDonald`,
    url: `https://www.qwyck.co.uk`,
    links: [
      {
        id: 0,
        name: 'GitHub',
        link: 'https://github.com/jrmcdonald',
      },
      {
        id: 1,
        name: 'Twitter',
        link: 'https://twitter.com/qwyck',
      },
      {
        id: 3,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jamiemcd',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
  ],
};
