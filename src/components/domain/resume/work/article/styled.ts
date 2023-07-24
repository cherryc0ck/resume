import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    padding: 24px 0;
    border-bottom: 1px solid ${theme.colors.neutral100};

    ${theme.media.tablet} {
      display: flex;
      padding: 48px 0;
    }
  `};
`;
