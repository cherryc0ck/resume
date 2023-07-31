import { Title } from "@/components/common";
import * as S from "./styled";
import EduArticle from "./article/EduArticle";

const DATA = [
  {
    name: "비트캠프",
    date: "2020.03 ~ 2020.08",
    desc: "JAVA 백엔드 웹 개발자 양성과정 수료",
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
