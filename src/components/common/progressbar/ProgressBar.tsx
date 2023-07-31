"use client";

import useScrollPercent from "@/hooks/useScrollPercent";
import * as S from "./styled";

const ProgressBar = () => {
  const { scrollPercent } = useScrollPercent();

  return (
    <S.Container>
      <S.Wrapper scrollPercent={scrollPercent}></S.Wrapper>
    </S.Container>
  );
};

export default ProgressBar;
