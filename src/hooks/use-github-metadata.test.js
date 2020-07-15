import { useStaticQuery } from 'gatsby';
import { useGitHubMetadata } from './use-github-metadata';

const response = {
  github: {
    repos: {
      edges: [
        {
          node: {
            name: 'the-repo-4',
            description: 'repo-description-4',
            languages: {
              edges: [
                {
                  node: {
                    name: 'language-1',
                  },
                },
              ],
            },
            url: 'url-4',
          },
        },
        {
          node: {
            name: 'repo-1',
            description: 'repo-description-1',
            languages: {
              edges: [
                {
                  node: {
                    name: 'language-1',
                  },
                },
              ],
            },
            url: 'url-1',
          },
        },
        {
          node: {
            name: 'repo-2',
            description: 'repo-description-2',
            languages: {
              edges: [
                {
                  node: {
                    name: 'language-2',
                  },
                },
              ],
            },
            url: 'url-2',
          },
        },
        {
          node: {
            name: 'a-repo-3',
            description: 'repo-description-3',
            languages: {
              edges: [
                {
                  node: {
                    name: 'language-1',
                  },
                },
              ],
            },
            url: 'url-3',
          },
        },
      ],
    },
  },
};

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => response);
});

describe(`useGitHubMetadata`, () => {
  let result;

  beforeEach(() => {
    result = useGitHubMetadata();
  });

  test(`should call useStaticQuery`, () => {
    expect(useStaticQuery).toHaveBeenCalled();
  });

  test.each(['language-1', 'language-2'])(`returns a map with the language %i`, (language) => {
    expect(result.has(language)).toEqual(true);
  });

  test(`returns repos sorted by name for language-1`, () => {
    expect(result.get('language-1')).toEqual([
      { description: 'repo-description-3', name: 'a-repo-3', url: 'url-3' },
      { description: 'repo-description-1', name: 'repo-1', url: 'url-1' },
      { description: 'repo-description-4', name: 'the-repo-4', url: 'url-4' },
    ]);
  });

  test(`returns a single repo for language-2`, () => {
    expect(result.get('language-2')).toEqual([{ description: 'repo-description-2', name: 'repo-2', url: 'url-2' }]);
  });
});
