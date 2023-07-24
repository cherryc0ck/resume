import type { Project } from "../../Work";
import * as S from "./styled";

interface WorkArticleProjectProps {
  project: Project;
}

export default function WorkArticleProject({
  project,
}: WorkArticleProjectProps) {
  const { name, desc, url, details, techs } = project;

  return (
    <S.Container>
      <S.Wrapper>
        <h3>
          <a href={url} target="_blank">
            {name}
          </a>
        </h3>
        <S.Desc>{desc}</S.Desc>
        <h4>Details</h4>
        <S.DetailList>
          {details.map((detail, i) => (
            <li key={i}>- {detail}</li>
          ))}
        </S.DetailList>
        <h4>Tech Stacks</h4>
        <p>{techs.join(", ")}</p>
      </S.Wrapper>
    </S.Container>
  );
}
