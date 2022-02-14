import { Container } from './styles/Container.styled';
import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import { Button } from './styles/Button.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./logo192.png' alt='logo'/>
          <Button>Try It Free</Button>
        </Nav>
        <h1>Hubble</h1>
      </Container>
    </StyledHeader>
  );
}

export default Header;