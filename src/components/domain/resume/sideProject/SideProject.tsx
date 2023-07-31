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
      desc: "요즘 유튜브, 틱톡, 인스타그램 등 모바일 기반 동영상 플랫폼 등이 빠르게 성장하며 1인 미디어 산업이 유행하고 있음에 따라 타겟층을 크리에이터와 예비 크리에이터로 선정,  자신만의 독특한 아이디어와 창의력으로 매력적인 콘텐츠를 제공, 혹은 커피챗을 통해 간단한 대화를 나눌 수 있는 플랫폼을 제작하였습니다",
      url: "https://cround-client.vercel.app/",
      details: [
        "커스텀 훅 패턴을 사용하여 UI와 로직 분리, 여러 컴포넌트에서 동일한 로직을 재사용하기 용이하게 개발",
        "디자인 시스템을 적용하여 컴포넌트 개발",
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
      {DATA.map((data, idx) => (
        <WorkArticle key={idx} company={data.company} project={data.project} />
      ))}
    </S.Section>
  );
}
