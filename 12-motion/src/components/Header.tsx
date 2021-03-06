import { css, Theme } from "@emotion/react";
import ButtonList from "./ButtonList";

interface HeaderProps {
  title?: string;
  titleColor?: string;
}

const Header = ({ title = "MOTION" }: HeaderProps) => {
  return (
    <div css={(theme) => headerStyle(theme)}>
      <h1 className="title">{title}</h1>
      <ButtonList />
    </div>
  );
};

const headerStyle = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.color.primary};
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  h1.title {
    margin: 0;
    color: ${theme.color.secondary};
  }
`;

export default Header;
