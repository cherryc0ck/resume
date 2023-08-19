import { Title } from "@/components/common";
import * as S from "./styled";
import EduArticle from "./article/EduArticle";

const DATA = [
  {
    name: "비트캠프",
    date: "2020.03 ~ 2020.08",
    desc: "JAVA 백엔드 웹 개발자 양성과정 수료",
    detail: [
      "- Spring 기반의 MVC 웹 프로그래밍 및 ORM을 활용한 데이터베이스 구축과 REST API 설계 경험",
      "- 팀 프로젝트를 통해 클라이언트와 서버 간의 흐름을 이해하고 경험",
    ],
  },
];

export default function Education() {
  return (
    <S.Section>
      <Title text="Education" />
      {DATA.map((data, idx) => (
        <EduArticle key={idx} data={data} />
      ))}
    </S.Section>
  );
}
