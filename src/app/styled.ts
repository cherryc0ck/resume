import styled, { css } from "styled-components";

export const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;
    padding: 48px 0px;
    overflow-y: auto;

    ${theme.media.tablet} {
      padding: 96px 0;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 713px;
    padding: 0px 16px;
    margin: 0 auto;
  `};
`;
