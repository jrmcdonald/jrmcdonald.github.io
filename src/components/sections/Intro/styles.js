import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 2.35714em;
  padding-bottom: 0.64286em;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.p`
  @media (min-width: 64em) {
    width: 86%;
  }

  @media (min-width: 80em) {
    width: 75%;
  }

  font-size: 1.4em;
  font-weight: 300;
`;
