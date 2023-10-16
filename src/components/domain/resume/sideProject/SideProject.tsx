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
      endDate: "2023.08",
    },
    project: [
      {
        name: "크라운드 - 크리에이터를 위한 서비스",
        desc: "크리에이터와 예비 크리에이터들을 위한서비스로서 프론트엔드1 / 백엔드1 / 디자인1 총 3명이서 진행하였습니다.",
        url: "https://cround-client.vercel.app/",
        details: [
          "Next.js(SSR) 13버전을 사용하여 렌더링 최적화 및 SEO 개선하였습니다.",
          "MSW로 API를 모킹하여 백엔드 개발진행 상황과 상관없이 FE개발하였습니다.",
          "커스텀 훅 패턴을 사용하여 UI와 로직 분리, 여러 컴포넌트에서 동일한 로직을 재사용하기 용이하게 개발하였습니다.",
          "디자이너분과 논의 후 디자인 시스템을 활용하여 컴포넌트를 개발하였습니다.",
        ],
        techs: [
          "TypeScript",
          "Next.js(13버전)",
          "React-query",
          "Styled-Components",
          "Git",
        ],
      },
    ],
  },
];

export default function SideProject() {
  return (
    <S.Section>
      <Title text="Side Project" />
      {DATA.map((data, idx) => (
        <WorkArticle key={idx} company={data.company} project={data.project} />
      ))}
    </S.Section>
  );
}
