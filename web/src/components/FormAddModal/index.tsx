import React from 'react';
import * as C from './style';
import { InputForm } from './InputForm';

interface FormAddModalProps {
    closeModal: () => void
}

export const FormAddModal: React.FC<FormAddModalProps> = ({ closeModal }) => {
    const [transaction, setTransaction] = React.useState({
        name_trade: '',
        type_trade: '',
        amount: '',
        tag: '',
        date: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setTransaction(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('http://localhost:8080/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
            .then(response => {
                if (response.ok) {
                    console.log("Transaction added sucessusfully!");
                    document.dispatchEvent(new Event('transactionAdded'));
                    closeModal()
                } else {
                    console.log("Error adding transaction");
                }
            })
            .catch(erorr => {
                console.log("Error", erorr);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <C.Container>
                <C.ItemContainer>
                    <C.Title>New transaction</C.Title>
                    <C.BtnClose onClick={closeModal}>X</C.BtnClose>
                </C.ItemContainer>
                <C.ItemContainer>
                    <InputForm type="text" placeholder="Transaction Name*" name="name_trade" value={transaction.name_trade} onChange={handleChange} width="50%" />
                    <InputForm type="text" placeholder="Amount*" name="amount" value={transaction.amount} onChange={handleChange} width="50%" />
                </C.ItemContainer>
                <C.ItemContainer>
                    <InputForm type="date" name="date" value={transaction.date} onChange={handleChange} width="45%" />
                    <InputForm type="text" name="tag" placeholder="TAGS*" value={transaction.tag} onChange={handleChange} width="55%" />
                </C.ItemContainer>
                <C.ItemContainer>
                    <C.ContainerType>
                        <C.TextType>Transaction Type:*</C.TextType>
                        <C.ContainerTypeRadio>
                            <InputForm type="radio" id="in" name="type_trade" value="in" onChange={handleChange} />
                            <C.LabelType htmlFor="in">In</C.LabelType>
                            <InputForm type="radio" id="out" name="type_trade" value="out" onChange={handleChange} />
                            <C.LabelType htmlFor="out">Out</C.LabelType>
                        </C.ContainerTypeRadio>
                    </C.ContainerType>
                    <C.Btn type="submit">New</C.Btn>
                    {
                        document.dispatchEvent(new Event('transactionAdded'))
                    }
                </C.ItemContainer>
            </C.Container>
        </form>
    )

}