import { Container } from './styles/Container.styled';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./logo192.png' alt='logo' />
          <Button>Try It Free</Button>
        </Nav>
        <h1>Hubble</h1>
        <Flex>
          <div>
            <h1>XXXXXX</h1>
            <p>
              gragargaga
            </p>
            <Button bg='#ff0099' color='#fff'>Get started For Free</Button>
          </div>
          <Image src='./logo512.png' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;