import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: 62em;
  padding-top: 3.35728em;
  padding-bottom: 1.14286em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;
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

    a {
      color: hsla(0, 0%, 0%, 0.8);
      -webkit-transition: color 0.3s ease;
      -moz-transition: color 0.3s ease;
      -o-transition: color 0.3s ease;
      transition: color 0.3s ease;
    }

    a:hover {
      color: rgb(0, 127, 170);
    }
  }
`;

export const Copyright = styled.p`
  white-space: nowrap;

  a {
    color: hsla(0, 0%, 0%, 0.8);
    -webkit-transition: color 0.3s ease;
    -moz-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }

  a:hover {
    color: rgb(0, 127, 170);
  }
`;
