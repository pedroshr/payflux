import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 75px 75px 75px 75px;
    flex-direction: column;
    width: 680px;
    height: 490px;
    background-color: #ffffff;
    border: none;
    border-radius: 20px;
    box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h1`
    color: #323232;
    font-size: 35px;
    font-weight: 400;
`

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 35px;
    width: 100%;
`

export const ContainerType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0% 12px;
`
export const ContainerTypeRadio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0% 12px;
`

export const TextType = styled.p`
    color: #969696;
    font-weight: regular;
    font-size: 20px;
`

export const LabelType = styled.label`
    font-size: 20px;
    font-weight: light;
    color: #969696;
`

export const Btn = styled.button`
    display: flex;
    height: 64px;
    width: 190px;
    justify-content: center;
    align-items: center;
    background-color: #969696;
    border: none;
    border-radius: 20px;
    font-size: 32px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin: 0% 12px;
`

export const BtnClose = styled.button`
    background-color: white;
    border: none;
    font-size: 25px;
    color: #323232;
    cursor: pointer;
`