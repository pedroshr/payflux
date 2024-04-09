import styled from 'styled-components';
import { ButtonProps } from './index';

export const Btn = styled.button<ButtonProps>`
    display: flex;
    height: 64px;
    width: 290px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color || 'black'};
    border: none;
    border-radius: 20px;
    font-size: 32px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin-left: 34px;
    margin-right: 34px;
`