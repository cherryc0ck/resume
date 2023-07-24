import { Title } from "@/components/common";
import * as S from "./styled";

export default function Contact() {
  return (
    <S.Section>
      <Title text="Contact" />
      <S.ContactList>
        <li>
          <a href="mailto:qstar9536@gmail.com" target="_blank">
            이메일
          </a>
        </li>
        <li>
          <a href="https://github.com/cherryc0ck" target="_blank">
            깃허브
          </a>
        </li>
      </S.ContactList>
    </S.Section>
  );
}
