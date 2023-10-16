import type { Project } from "../../Work";
import * as S from "./styled";

interface WorkArticleProjectProps {
  project: Project[];
}

export default function WorkArticleProject({
  project,
}: WorkArticleProjectProps) {
  return (
    <S.Container>
      <S.Wrapper>
        {project.map((data) => (
          <>
            <h3>
              {data.url === "" ? (
                <S.NotLink>{data.name}</S.NotLink>
              ) : (
                <a href={data.url} target="_blank">
                  {data.name}
                </a>
              )}
            </h3>
            <S.Desc>{data.desc}</S.Desc>
            <h4>Details</h4>
            <S.DetailList>
              {data.details.map((detail, i) => (
                <li key={i}>- {detail}</li>
              ))}
            </S.DetailList>
            <h4>Tech Stacks</h4>
            <S.Tech>{data.techs.join(", ")}</S.Tech>
          </>
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
