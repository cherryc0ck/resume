import { Title } from "@/components/common";
import WorkArticle from "./article/WorkArticle";
import * as S from "./styled";

export interface Company {
  name: string;
  url: string;
  position: string;
  startDate: string;
  endDate?: string;
}

export interface Project {
  name: string;
  desc: string;
  url: string;
  details: string[];
  techs: string[];
}

const DATA = [
  {
    company: {
      name: "그로스핏",
      url: "https://growthfit.kr/",
      position: "Web Fronted Developer",
      startDate: "2021.09",
      endDate: "2023.02",
    },
    project: {
      name: "그로스핏 애널리틱스",
      desc: "신입 프론트엔드 개발자로서 마케팅분석 솔루션인 그로스핏 애널리틱스를 개발했습니다. 개발 초기 단계부터 팀에 합류하여  베타버전까지 성공적으로 런치하였습니다. 클라이언트 영역은 혼자 작업하였으며 그래프나 대쉬보드 등으로 데이터 시각화하는 작업을 주로 하였습니다.",
      url: "https://analytics.growthfit.kr/",
      details: [
        "프론트엔드 인터페이스 구현",
        "Chart.js을 사용한 리포트, 대쉬보드 구현",
        "BigQuery와 연동하여 리포트 관련 API 개발",
        "리포트, 대쉬보드에 대한 요약 코멘트 기능 개발",
        "Google Analytics 4 설정 및 추적코드 세팅",
      ],
      techs: [
        "React",
        "Redux",
        "Chart.js",
        "Node.js",
        "Styled-Components",
        "Git",
      ],
    },
  },
];

export default function Work() {
  return (
    <S.Section>
      <Title text="Work Experience" />
      {DATA.map((data, idx) => (
        <WorkArticle key={idx} company={data.company} project={data.project} />
      ))}
    </S.Section>
  );
}
