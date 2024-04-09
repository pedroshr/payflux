import React from 'react';
import * as S from './style.tsx';
import { useNavigate, useLocation } from 'react-router-dom';

interface ItemListProps {
    title: string;
    icon: string;
    linkTo: string;
}

export const ItemList: React.FC<ItemListProps> = ({ title, icon, linkTo }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate(linkTo);
    }

    return (
        <S.ItemDiv className={location.pathname === linkTo ? 'active' : ''} onClick={handleClick}>
            <S.ItemIcon src={icon} />
            <S.ItemTitle>{title}</S.ItemTitle>
        </S.ItemDiv>
    )

}