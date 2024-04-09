import React from 'react';
import { Btn } from './style';

export interface ButtonProps {
    color?: string;
    children?: React.ReactNode;
}

export const BtnHome: React.FC<ButtonProps> = ({ color, children }) => {
    return <Btn color={color}>{children}</Btn>
}