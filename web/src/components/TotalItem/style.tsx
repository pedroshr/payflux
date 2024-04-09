import styled from 'styled-components';
import { TotalItemProps } from '.';

export const ContainerTotal = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    `

export const ContainerAmount = styled.div`
    display: flex;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center; 
    width: 543px;
    height: 165px;
    border-radius: 20px;
`

export const TitleAmount = styled.span`
    display: flex;
    font-size: 60px;
    font-weight: bold;
    color: ${(props) => props.color || '#D9D9D9'};
`

export const TitleTotal = styled.p`
    display: flex;
    font-size: 30px;
    font-weight: regular;
    color: #323232;
    margin-bottom: 22px;
`


