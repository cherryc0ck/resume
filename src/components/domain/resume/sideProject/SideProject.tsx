import { Title } from "@/components/common";
import * as S from "./styled";
import WorkArticle from "../work/article/WorkArticle";

const DATA = [
  {
    company: {
      name: "크라운드 팀",
      url: "https://github.com/cround-team",
      position: "Web Fronted Developer",
      startDate: "2023.04",
    },
    project: {
      name: "크라운드 - 크리에이터를 위한 서비스",
      desc: "",
      url: "https://cround-client.vercel.app/",
      details: [
        // "프론트엔드 인터페이스 구현",
        // "Chart.js을 사용한 리포트, 대쉬보드 구현",
        // "BigQuery와 연동하여 리포트 관련 API 개발",
        // "리포트, 대쉬보드에 대한 요약 코멘트 기능 개발",
        // "Google Analytics 4 설정 및 추적코드 세팅",
      ],
      techs: [
        "React",
        "TypeScript",
        "Next.js",
        "React-query",
        "Styled-Components",
        "GitHub",
      ],
    },
  },
];

export default function SideProject() {
  return (
    <S.Section>
      <Title text="Side Project" />
      {DATA.map((data) => (
        <WorkArticle company={data.company} project={data.project} />
      ))}
    </S.Section>
  );
}
