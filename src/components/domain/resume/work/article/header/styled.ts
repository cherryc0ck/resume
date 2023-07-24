import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: 24px;

    h2 {
      margin-bottom: 12px;
      ${theme.typo.title.md};
      ::after {
        margin-left: 0.15em;
        font-weight: 400;
        content: "↗️";
      }
      :hover {
        text-decoration: underline;
      }
    }

    dl {
      ${theme.typo.body.sm};
      dt {
        ${theme.a11y.visuallyHidden};
      }
    }

    ${theme.media.tablet} {
      flex-shrink: 0;
      width: 40%;
      padding-right: 32px;
    }
  `};
`;
