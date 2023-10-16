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
    project: [
      {
        name: "그로스핏 애널리틱스",
        desc: "신입 프론트엔드 개발자로서 마케팅분석 솔루션인 그로스핏 애널리틱스를 개발했습니다. 개발 초기 단계부터 팀에 합류하여  베타버전까지 성공적으로 런치하였습니다. 클라이언트 영역은 혼자 작업하였으며 차트나 대시보드 등으로 데이터 시각화하는 작업을 주로 하였습니다.",
        url: "https://analytics.growthfit.kr/",
        details: [
          "Google Analytics 4 설정 및 추적코드 세팅",
          "WebSocket으로 실시간 전달되는 데이터를 Redux로 관리",
          "데이터 시각화를 위한 대시보드, 차트 기능 구현",
          "BigQuery와 연동하여 리포트 관련 API 구현",
          "리포트, 대시보드에 대한 요약 코멘트 기능 개발",
          "고객사 요청 사항을 반영한 커스텀 리포트 개발",
          "GCP(compute engine)를 활용한 배포",
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
      {
        name: "프로젝트 관리 협업 툴",
        desc: "팀원들간의 빠른 업무 공유 및 성과 분석과 일정 관리 가능한 서비스",
        url: "https://analytics.growthfit.kr/",
        details: [
          "프론트엔드 기술환경 구성 및 기본 기능 구현",
          "SSE를 이용한 실시간 알림 구현",
          "WebSocket으로 실시간 전달되는 데이터를 Redux로 관리",
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
      {
        name: "네이버 광고 자동입찰 및 입찰 최적화",
        desc: "키워드 광고의 현재순위를 기반으로 입찰을 최적화하고 성과 중심의 입찰 전략을 도출하여 효율적인 광고를 운영을 제공하는 서비스 (현재 중지)",
        url: "",
        details: [
          "Recoli를 활용한 전역 상태 관리",
          "디자인 없이 material-ui를 활용한 UI 구현",
        ],
        techs: ["React", "Recoli", "Node.js", "Material-ui", "Git"],
      },
    ],
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
