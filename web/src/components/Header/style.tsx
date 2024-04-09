import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 101px;
    background-color: white;
    box-shadow: 0px -3px 0px #D9D9D9 inset;
`

export const ImgLogo = styled.img`
    width: 199px;
    height: 50px;
    justify-content: left;
`

export const ImgBalanceLogo = styled.img`
    width: 50px;
    height: 50px;
`

export const BalanceContainer = styled.div`
    display: flex;
    align-items: center;
`

export const BalanceTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const BalanceTitle = styled.h1`
    font-size: 20px;
    font-weight: 400;
    color: #323232;

`
export const BalanceAmount = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: #4F7B23;
`