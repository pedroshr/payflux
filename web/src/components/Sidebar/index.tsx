import React from 'react';
import * as S from './style.tsx';
import { ItemList } from './ItemSidebar/index.tsx';

export const Sidebar: React.FC = () => {
    return (
        <>
            <S.SidebarContainer>
                <ItemList title="Home" icon="../src/assets/home.svg" linkTo="/" />
                <ItemList title="Received" icon="../src/assets/in.svg" linkTo="/received" />
                <ItemList title="Outflow" icon="../src/assets/out.svg" linkTo="/outflow" />
            </S.SidebarContainer>
        </>
    )
}