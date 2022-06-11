import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 8px 24px;
    max-width: 1200px;
    z-index: 3;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    margin-top: 24px;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;