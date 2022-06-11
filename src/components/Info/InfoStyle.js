import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    justify-content: center;
    padding: 0 24px;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;
    height: calc(100vh - 80px);
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;

export const Column1 = styled.div`
    grid-area: col1;
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const Column2 = styled.div`
    grid-area: col2;
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    max-width: 540px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const Heading = styled.h1`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    margin-bottom: 35px;
    max-width: 440px;
    font-size: 18px;
    line-height: 24px;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    height: 100%;
    max-width: 555px;
`;

export const Img = styled.img`
    margin: 0 0 10px 0;
    padding-right: 0;
    width: 100%;
`;

