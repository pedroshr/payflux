import styled from 'styled-components';

export const ItemDiv = styled.div`
    display: flex;
    font-weight: 400;
    color: #979797;
    padding: 20px 0;
    cursor: pointer;
    filter: invert(63%) sepia(16%) saturate(2%) hue-rotate(318deg) brightness(91%) contrast(97%);
    transition: filter 0.6s ease;

    &:hover {
        filter: brightness(0) saturate(100%) invert(17%) sepia(0%) saturate(0%) hue-rotate(343deg) brightness(103%) contrast(93%);
    }

    &.active {
        filter: brightness(0) saturate(100%) invert(38%) sepia(41%) saturate(718%) hue-rotate(47deg) brightness(99%) contrast(88%);
    }
`

export const ItemTitle = styled.h1`
    font-size: 40px;
    font-weight: 400;
`

export const ItemIcon = styled.img`
    width: 48px;
    height: 48px;
`