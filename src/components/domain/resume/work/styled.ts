import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    padding: 24px 0 48px;

    ${theme.media.tablet} {
      padding: 40px 0 72px;
    }
  `};
`;
