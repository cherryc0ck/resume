import * as S from "./styled";

interface EtcArticleProps {
  data: {
    name: string;
    date: string;
    link: string;
  };
}

export default function EtcArticle({ data }: EtcArticleProps) {
  const { name, date, link } = data;
  return (
    <S.Article>
      <S.Wrapper>
        <h3>
          <a href={link} target="_blank">
            {name}
          </a>
        </h3>
        <time>{date}</time>
      </S.Wrapper>
    </S.Article>
  );
}
