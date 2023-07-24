import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    padding: 24px 0 48px;
  `};
`;

export const ContactList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 0;

    li {
      position: relative;
      padding-left: 12px;
      ${theme.typo.body.md};
      ::before {
        position: absolute;
        top: 10px;
        left: 0px;
        width: 4px;
        height: 4px;
        background-color: rgb(0, 0, 0);
        border-radius: 50%;
        content: "";
      }
    }

    li a::after {
      margin-left: 2.4px;
      content: "↗️";
    }

    ${theme.media.tablet} {
      gap: 8px;
      li {
        ::before {
          top: 12px;
        }
      }
    }
  `};
`;
