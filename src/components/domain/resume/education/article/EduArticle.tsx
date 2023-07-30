import * as S from "./styled";

interface EduarticleProps {
  data: {
    name: string;
    date: string;

    desc: string;
  };
}

export default function EduArticle({ data }: EduarticleProps) {
  const { name, date, desc } = data;
  return (
    <S.Article>
      <S.Wrapper>
        <h3>{name}</h3>
        <p>{desc}</p>
        <time>{date}</time>
      </S.Wrapper>
    </S.Article>
  );
}
