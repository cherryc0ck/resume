import { css } from "styled-components";
import { media } from "./media";

export const typo = {
  title: {
    xs: () => css`
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 2.4rem;
      ${media.tablet} {
        font-size: 2rem;
        line-height: 3.3rem;
      }
    `,
    sm: () => css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.6rem;

      ${media.tablet} {
        font-size: 2.4rem;
        line-height: 3.2rem;
      }
    `,
    md: () => css`
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 2.8rem;

      ${media.tablet} {
        font-size: 2.6rem;
        line-height: 3.2rem;
      }
    `,
    lg: () => css`
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 3.2rem;

      ${media.tablet} {
        font-size: 3.6rem;
        line-height: 3.6rem;
      }
    `,
    xl: () => css`
      font-size: 5rem;
      font-weight: 700;
      line-height: 6rem;

      ${media.tablet} {
        font-size: 10rem;
        line-height: 12rem;
      }
    `,
  },
  body: {
    sm: () => css`
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.8rem;
      letter-spacing: 0.04em;

      ${media.tablet} {
        font-size: 1.6rem;
        line-height: 2.2rem;
      }
    `,
    md: () => css`
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;

      ${media.tablet} {
        font-size: 2rem;
        line-height: 3.1rem;
      }
    `,
    lg: () => css`
      font-size: 2rem;
      font-weight: 400;
      line-height: 3.4rem;

      ${media.tablet} {
        font-size: 2.8rem;
        line-height: 4.7rem;
      }
    `,
  },
};
