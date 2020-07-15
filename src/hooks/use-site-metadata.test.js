import { useStaticQuery } from 'gatsby';
import { useSiteMetadata } from './use-site-metadata';

const response = {
  site: {
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
      ],
    },
  },
};

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => response);
});

describe(`useSiteMetadata`, () => {
  let result;

  beforeEach(() => {
    result = useSiteMetadata();
  });

  test(`should call useStaticQuery`, () => {
    expect(useStaticQuery).toHaveBeenCalled();
  });

  test(`returns site metadata`, () => {
    expect(result).toEqual(response.site.siteMetadata);
  });
});
