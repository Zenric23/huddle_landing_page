import React from 'react'
import {Image, Nav, StyledHeader} from './styles/Header.styled'
import { Button } from './styles/stylesUtil/Button.styled'
import { Container } from './styles/stylesUtil/Container.styled'
import Logo from '../assets/images/logo.svg'
import FeatureImg from '../assets/images/illustration-mockups.svg'
import { Flex } from './styles/stylesUtil/Flex.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <img src={Logo} />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as you
              engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Getting Started For Free
            </Button>
          </div>
          <Image src={FeatureImg} />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header