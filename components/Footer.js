import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #773344;
`;

const FooterWrap = styled.div`
  padding: 0px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              {/* <SocialLogo to="/" onClick={toggleHome}>
                <Image
                  src={logo}
                  alt="Scruffs2Crufts Tonbridge"
                  width={200}
                  height={70}
                />
              </SocialLogo> */}
              <WebsiteRights>
                Scruffs2Crufts Tonbridge &copy; {new Date().getFullYear()}
                All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href={"//www.eddyku.com/"}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
