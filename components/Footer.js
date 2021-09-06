import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

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

const WebsiteRights = styled.small`
  color: #fff;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const Terms = styled.a`
  color: #fff;
  font-size: 14px;
  margin-right: auto;
  margin-left: 10px;
`;

const Policy = styled.a`
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <div style={{ marginRight: "auto" }}>
                <WebsiteRights>
                  Scruffs2Crufts Tonbridge &copy; {new Date().getFullYear()}
                </WebsiteRights>

                <Terms href="terms">Terms</Terms>
                <Policy href="policy">Policy</Policy>
              </div>
              <SocialIcons>
                <SocialIconLink
                  href={"//goo.gl/maps/fSBGfxYA1Gs5jTNZ7"}
                  target="_blank"
                  aria-label="Google Maps"
                >
                  <SiGooglemaps />
                </SocialIconLink>
                <SocialIconLink
                  href={"//www.facebook.com/Scruffs2CruftsTonbridge/"}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href={"//www.instagram.com/scruffs2cruftstonbridge/"}
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
