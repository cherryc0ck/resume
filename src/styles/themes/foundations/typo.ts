import { css } from "styled-components";

export const typo = {
  head: {
    sm: () => css`
      font-size: 2.4rem;
      font-weight: 700;
      /* line-height: 1.3333; */
      line-height: 3.2rem;
    `,
    md: () => css`
      font-size: 2.8rem;
      font-weight: 700;
      /* line-height: 1.2857; */
      line-height: 3.6rem;
    `,
    lg: () => css`
      font-size: 3.2rem;
      font-weight: 700;
      /* line-height: 1.25; */
      line-height: 4rem;
    `,
  },
  title: {
    xs: () => css`
      font-size: 1.3rem;
      font-weight: 700;
      /* line-height: 1.2727; */
      line-height: 2.4rem;
    `,
    sm: () => css`
      font-size: 1.8rem;
      font-weight: 700;
      /* line-height: 1.2727; */
      line-height: 2.6rem;
    `,
    md: () => css`
      font-size: 2.2rem;
      font-weight: 700;
      /* line-height: 1.2727; */
      line-height: 2.8rem;
    `,
    lg: () => css`
      font-size: 2.6rem;
      font-weight: 700;
      /* line-height: 1.2727; */
      line-height: 3.2rem;
    `,
    xl: () => css`
      font-size: 5rem;
      font-weight: 700;
      /* line-height: 1.1818; */
      line-height: 6rem;
    `,
  },
  body: {
    sm: () => css`
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.8rem;
      letter-spacing: 0.04em;
    `,
    md: () => css`
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;
    `,
    lg: () => css`
      font-size: 2rem;
      font-weight: 400;
      line-height: 3.4rem;
    `,
  },
};
