import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.tablet} {
      flex-grow: 1;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h3 {
      margin-bottom: 4px;
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
    h4 {
      ${theme.typo.title.xs};
    }
    p {
      ${theme.typo.body.md};
    }

    ${theme.media.tablet} {
      h3 {
        margin-bottom: 12px;
      }
    }
  `};
`;

export const Desc = styled.p`
  ${({ theme }) => css`
    margin-bottom: 14px;

    ${theme.media.tablet} {
      margin-bottom: 28px;
    }
  `};
`;

export const DetailList = styled.ul`
  ${({ theme }) => css`
    margin-bottom: 14px;
    padding-left: 0px;

    li {
      position: relative;
      padding-left: 6px;
      ${theme.typo.body.md};
    }

    ${theme.media.tablet} {
      margin-bottom: 28px;
    }
  `};
`;
