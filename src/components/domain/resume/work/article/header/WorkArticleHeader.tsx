import type { Company } from "../../Work";
import * as S from "./styled";

interface WorkArticleHeaderProps {
  company: Company;
}

export default function WorkArticleHeader({ company }: WorkArticleHeaderProps) {
  const { name, url, position, startDate, endDate } = company;
  return (
    <S.Header>
      <h2>
        <a href={url} target="_blank">
          {name}
        </a>
      </h2>
      <dl>
        <dt>직책</dt>
        <dd>{position}</dd>
      </dl>
      <dl>
        <dt>기간</dt>
        <dd>
          <time>{startDate}</time>
          <span> - </span>
          <time>{endDate || "현재"}</time>
        </dd>
      </dl>
    </S.Header>
  );
}
