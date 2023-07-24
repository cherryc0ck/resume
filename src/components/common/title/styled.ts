import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: 16px;
    ${theme.typo.title.lg};

    ::after {
      margin-left: 0.1em;
      opacity: 0.25;
      content: ";";
    }
  `};
`;
