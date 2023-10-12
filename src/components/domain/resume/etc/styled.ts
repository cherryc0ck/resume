import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    padding-bottom: 48px;

    ${theme.media.tablet} {
      padding-bottom: 72px;
    }
  `};
`;
