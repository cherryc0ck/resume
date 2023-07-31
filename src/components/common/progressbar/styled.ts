import styled, { css } from "styled-components";

interface WrapperProps {
  scrollPercent: number;
}

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    height: 12px;
    background-color: ${theme.colors.white};

    ${theme.media.tablet} {
      height: 20px;
    }
  `};
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, scrollPercent }) => css`
    width: ${scrollPercent}%;
    height: 100%;
    background-color: ${theme.colors.black};
  `};
`;
