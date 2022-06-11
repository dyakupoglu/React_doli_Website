import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRights,
  SocialMediaIcons,
  SocialMediaIconLink,
} from "./FooterStyle";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Download Video</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">YouTube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialMediaLogo to="/" onClick={toggleHome}>
              doli
            </SocialMediaLogo>
            <WebsiteRights>
              doli © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialMediaIcons>
              <SocialMediaIconLink
                href="https://www.linkedin.com/in/dogukan-yakupoglu"
                target=""
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialMediaIconLink>
              <SocialMediaIconLink
                href="https://www.youtube.com/"
                target=""
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialMediaIconLink>
              <SocialMediaIconLink
                href="https://twitter.com/"
                target=""
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialMediaIconLink>
              <SocialMediaIconLink
                href="https://www.instagram.com/"
                target=""
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialMediaIconLink>
              <SocialMediaIconLink
                href="https://www.facebook.com/"
                target=""
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialMediaIconLink>
            </SocialMediaIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
