import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    padding: 24px 0;
    border-bottom: 1px solid #d6d6d6;

    ${theme.media.tablet} {
      padding: 40px 0;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h3 {
      margin-bottom: 6px;
      ${theme.typo.title.sm};

      ::after {
        margin-left: 0.15em;
        font-weight: 400;
        content: "↗️";
      }
      :hover {
        text-decoration: underline;
      }
    }
    p {
      ${theme.typo.body.md};
    }
    time {
      ${theme.typo.body.sm};
    }
    ul {
      margin: 12px 0;
    }
    ul li {
      margin: 6px 0;
      ${theme.typo.body.sm};
    }
  `};
`;
