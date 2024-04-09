import React from "react";
import * as T from "./style";

export interface TotalItemProps {
    color?: string;
    title?: string;
    total: number;
}

export const TotalItem: React.FC<TotalItemProps> = ({ color, title, total }) => {
    return (
        <T.ContainerTotal>
            <T.TitleTotal>{title}</T.TitleTotal>
            <T.ContainerAmount>
                <T.TitleAmount color={color}>${total}</T.TitleAmount>
            </T.ContainerAmount>
        </T.ContainerTotal>
    )

}
