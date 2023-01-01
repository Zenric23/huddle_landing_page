import React from "react";
import { Container } from "./styles/stylesUtil/Container.styled";
import { Flex } from "./styles/stylesUtil/Flex.styled";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  CopyRight,
  JustifyBetween,
  SocialIcons,
  StyledFooter,
} from "./styles/Footer.styled";
import Logo from "../assets/images/logo_white.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src={Logo} alt="" />
        <JustifyBetween>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons>
            <span>
              <AiOutlineTwitter />
            </span>
            <span>
              <AiFillFacebook />
            </span>
            <span>
              <AiFillLinkedin />
            </span>
          </SocialIcons>
        </JustifyBetween>
        <CopyRight>
          © 2021 Huddle. All right reserved 
        </CopyRight>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
