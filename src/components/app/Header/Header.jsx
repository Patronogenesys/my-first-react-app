import Button from "../Button/Button";
import FlexGroup from "../flex/FlexGroup/FlexGroup";
import FlexGroupJoined from "../flex/FlexGroupJoined/FlexGroupJoined";
import "./Header.scss";
import HeaderLink from "./HeaderLink/HeaderLink";

export default function Header() {
  return (
    <header className="header">
      <FlexGroup gap={15}>
        <span className="header--logo-text">My shop</span>
        <FlexGroupJoined>
          <HeaderLink href="">Home</HeaderLink>
          <HeaderLink href="">About</HeaderLink>
          <HeaderLink href="" isActive={true}>
            Catalog
          </HeaderLink>
          <Button>Meow</Button>
        </FlexGroupJoined>
      </FlexGroup>
    </header>
  );
}
