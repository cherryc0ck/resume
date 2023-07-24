import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    padding-top: 24px;
    margin-bottom: 48px;
    h1 {
      margin-bottom: 24px;
      ${theme.typo.title.xl};
    }

    p {
      ${theme.typo.body.lg};
    }

    ${theme.media.tablet} {
      margin-bottom: 72px;
      h1 {
        margin-bottom: 48px;
      }
    }
  `};
`;
