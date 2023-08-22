import * as S from "./styled";

interface EduarticleProps {
  data: {
    name: string;
    date: string;
    detail: string[];
    desc: string;
  };
}

export default function EduArticle({ data }: EduarticleProps) {
  const { name, date, desc, detail } = data;
  return (
    <S.Article>
      <S.Wrapper>
        <h3>{name}</h3>
        <p>{desc}</p>
        <time>{date}</time>
        <ul>
          {detail.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      </S.Wrapper>
    </S.Article>
  );
}
