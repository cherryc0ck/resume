"use client";

import { Contact, Introduce, SideProject, Work } from "@/components/domain";
import * as S from "./styled";

export default function Home() {
  return (
    <S.Main>
      <S.Wrapper>
        <Introduce />
        <Work />
        <SideProject />
        <Contact />
      </S.Wrapper>
    </S.Main>
  );
}
