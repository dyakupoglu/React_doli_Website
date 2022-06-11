import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 48px 24px;
    max-width: 1100px;
`;

export const FooterLinksContainer = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 16px;
    width: 160px;
    box-sizing: border-box;
    text-align: left;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    margin-bottom: 16px;
    font-size: 14px;
`;

export const FooterLink = styled(Link)`
    margin-bottom: 0.5rem;
    font-size: 14px;
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    width: 100%;
    max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto 0 auto;
    max-width: 1100px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialMediaLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: start;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: 820px) {
        margin-bottom: 16px;
    }
`;

export const WebsiteRights = styled.small`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    @media screen and (max-width: 820px) {
        margin-bottom: 16px;
    }
`;

export const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialMediaIconLink = styled.a`
    font-size: 24px;
    color: #fff;
`;
