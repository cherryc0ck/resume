import type { Company, Project } from "../Work";
import WorkArticleHeader from "./header/WorkArticleHeader";
import WorkArticleProject from "./project/WorkArticleProject";
import * as S from "./styled";

interface WorkArticleProps {
  company: Company;
  project: Project[];
}

export default function WorkArticle({ company, project }: WorkArticleProps) {
  return (
    <S.Article>
      <WorkArticleHeader company={company} />
      <WorkArticleProject project={project} />
    </S.Article>
  );
}
