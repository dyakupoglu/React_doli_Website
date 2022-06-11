import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    min-height: 692px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
`;

export const FormWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-top: 32px;
    margin-left: 32px;
    text-decoration: none;
    font-weight: 700;
    font-size: 32px;
    color: #fff;

    @media screen and (max-width: 480px) {
        margin-top: 8px;
        margin-left: 16px;
    }
`;

export const FormContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    display: grid;
    height: auto;
    width: 100%;
    max-width: 400px;
    z-index: 1;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    color: #fff;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    color: #fff;
    margin-bottom: 8px;
    font-size: 14px;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border-radius: 4px;
    border: none;
`;

export const FormButton = styled.button`
    color: #fff;
    background: #01bf71;
    padding: 16px 0;
    border-radius: 4px;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    color: #fff;
    margin-top: 24px;
    font-size: 14px;
    text-align: center;
`;
