"use client";

import {
  Contact,
  Introduce,
  SideProject,
  Work,
  Etc,
} from "@/components/domain";
import * as S from "./styled";
import Education from "@/components/domain/resume/education/Education";
import { ProgressBar } from "@/components/common";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <S.Main>
        <S.Wrapper>
          <Introduce />
          <Work />
          <SideProject />
          <Education />
          <Etc />
          <Contact />
        </S.Wrapper>
      </S.Main>
    </>
  );
}
