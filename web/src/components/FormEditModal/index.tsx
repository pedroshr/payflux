import React, { useEffect } from 'react';
import * as C from './style';
import { InputForm } from './InputForm';
import { Transactions } from '../../pages/home/HomePage';

interface FormEditModalProps {
    closeModal: () => void
    transactionData: Transactions
}

export const FormEditModal: React.FC<FormEditModalProps> = ({ closeModal, transactionData }) => {
    const [transaction, setTransaction] = React.useState(transactionData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setTransaction(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        setTransaction(transactionData)
    }, [transactionData])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('http://localhost:8080/transaction', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
            .then(response => {
                if (response.ok) {
                    console.log("Transaction updated sucessusfully!");
                    document.dispatchEvent(new Event('transactionEdited'));
                    transactionData.amount = transaction.amount
                    closeModal()
                } else {
                    console.log("Error updating transaction");
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
                    <C.Title>Edit transaction</C.Title>
                    <C.BtnClose onClick={closeModal}>X</C.BtnClose>
                </C.ItemContainer>
                <C.ItemContainer>
                    <InputForm type="text" placeholder="Transaction Name*" name="name_trade" value={transaction.name_trade} onChange={handleChange} width="50%" />
                    <InputForm type="text" placeholder="Amount*" name="amount" value={transaction.amount.toString()} onChange={handleChange} width="50%" />
                </C.ItemContainer>
                <C.ItemContainer>
                    <InputForm type="date" name="date" value={transaction.date} onChange={handleChange} width="45%" />
                    <InputForm type="text" name="tag" placeholder="TAGS*" value={transaction.tag} onChange={handleChange} width="55%" />
                </C.ItemContainer>
                <C.ItemContainer>
                    <C.Btn type="submit">Edit</C.Btn>
                </C.ItemContainer>
            </C.Container>
        </form>
    )

}