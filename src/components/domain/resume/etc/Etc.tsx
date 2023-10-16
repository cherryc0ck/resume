import { Title } from "@/components/common";
import EtcArticle from "./article/EtcArticle";
import * as S from "./styled";

const DATA = [
  {
    name: "프론트엔드 질문&멘토 오픈채팅방 운영",
    date: "2023.03 ~ 현재",
    link: "https://open.kakao.com/o/soKSAV3c",
  },
];

export default function Etc() {
  return (
    <S.Section>
      <Title text="Etc" />
      {DATA.map((data, idx) => (
        <EtcArticle key={idx} data={data} />
      ))}
    </S.Section>
  );
}
