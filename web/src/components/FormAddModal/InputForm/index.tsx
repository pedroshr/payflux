import React from 'react'
import { Input } from './style';

interface InputFormProps {
    type: string;
    placeholder?: string;
    id?: string;
    name?: string;
    value?: string;
    width?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputForm: React.FC<InputFormProps> = ({ type, placeholder = null, id = null, name = null, value = null, width = '50%', onChange }) => {
    return (
        <Input type={type} placeholder={placeholder ? placeholder : ""} id={id ? id : ""} name={name ? name : ""} value={value ? value : ""} width={width ? width : ""} onChange={onChange} required />
    )
}