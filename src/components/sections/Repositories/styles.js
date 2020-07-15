import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 0.5em;
`;

export const Nav = styled.nav`
  margin-top: 0.5em;
  margin-bottom: 1.28571em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    display: inline-block;
    margin-left: 16px;
    position: relative;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const RepositorySection = styled.section`
  border-top: 1px solid #eff0f1;
  margin-bottom: 1.5em;

  h3 {
    margin-bottom: 0.14286em;
    color: #2d3c48;
    font-weight: 300;
  }
`;

export const RepositoryGrid = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5em 3em;
`;

export const RepositoryItem = styled.div`
  margin-top: 2.14286em;

  h4 {
    margin-top: 0.07143em;
    margin-bottom: 0.07143em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  p {
    margin-bottom: 0.4em;
  }
`;

export const ViewFullWrapper = styled.div`
  text-align: center;
  padding-top: 2.64286em;
  padding-bottom: 2.28571em;
`;
