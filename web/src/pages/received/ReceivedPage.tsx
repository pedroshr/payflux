import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContainerModal, ContainerTransactions, Table, TableCell, TableHeader, TableRow } from "../../styles/home";
import { Transactions } from "../home/HomePage";
import { ContainerTitle, SpanAmount, SpanTitle, Title } from "../../styles/out-in";
import { FormEditModal } from "../../components/FormEditModal";

export default function ReceivedPage() {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [receivedTransactions, setReceivedTransactions] = React.useState<Transactions[]>([])
    const [totalIn, setTotalIn] = React.useState<number>(0)
    const [transactionUpdate, setTransactionUptade] = React.useState<Transactions>()

    useEffect(() => {
        fetch('http://localhost:8080/transaction/all/in').then(response => response.json())
            .then(data => setReceivedTransactions(data))

        fetch('http://localhost:8080/transaction/dashboard').then(response => response.json())
            .then(data => setTotalIn(data.totalIn))

        document.addEventListener('transactionEdited', updateReceivedTransactions);

        return () => {
            document.removeEventListener('transactionEdited', updateReceivedTransactions);
        }
    }, [])

    function deleteTransaction(id: string) {
        const updateTransactions = receivedTransactions.filter(transaction => transaction.id !== id)
        setReceivedTransactions(updateTransactions)

        fetch(`http://localhost:8080/transaction/${id}`, { method: 'DELETE' })
            .then(() => {
                console.log("Transaction deleted!")
                document.dispatchEvent(new Event('transactionDeleted'));
                setTotalIn(totalIn - receivedTransactions.find(transaction => transaction.id === id)?.amount!)
            })
            .catch(error => console.error("Error: ", error))
    }

    function updateReceivedTransactions() {
        fetch('http://localhost:8080/transaction/all/in').then(response => response.json())
            .then(data => setReceivedTransactions(data))

        fetch('http://localhost:8080/transaction/dashboard').then(response => response.json())
            .then(data => setTotalIn(data.totalIn))

    }

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Header />
            <Sidebar />
            <Container>
                <ContainerTransactions>
                    <ContainerTitle>
                        <Title>Received</Title>
                        <div>
                            <SpanTitle>Total in</SpanTitle>
                            <SpanAmount>${totalIn}</SpanAmount>
                        </div>
                    </ContainerTitle>
                    <Table>
                        <TableRow>
                            <TableHeader style={{ width: '35%' }}>Name</TableHeader>
                            <TableHeader style={{ width: '25%' }}>Value</TableHeader>
                            <TableHeader style={{ width: '25%' }}>Tag</TableHeader>
                            <TableHeader style={{ width: '20%' }}>Date</TableHeader>
                            <TableHeader style={{ width: '20%' }}></TableHeader>
                        </TableRow>
                        {receivedTransactions.map(transaction => {
                            return (
                                <TableRow key={transaction.id}>
                                    <TableCell style={{ width: '35%' }} className="name">
                                        <img src="../src/assets/in.svg" alt="out" className="icon-in" />
                                        <span style={{ width: '100%', textAlign: 'center' }}>{transaction.name_trade}</span>
                                    </TableCell>
                                    <TableCell style={{ width: '25%' }}>{transaction.amount}</TableCell>
                                    <TableCell style={{ width: '25%' }}>{transaction.tag}</TableCell>
                                    <TableCell style={{ width: '20%' }}>{new Date(transaction.date).toISOString().split('T')[0]}</TableCell>
                                    <TableCell style={{ width: '20%' }}>
                                        <button onClick={() => {
                                            transaction.date = new Date(transaction.date).toISOString().split('T')[0]
                                            setTransactionUptade(transaction)
                                            handleOpenModal()
                                        }}>✏️</button>
                                        <button onClick={() => deleteTransaction(transaction.id)}>❌</button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </Table>
                </ContainerTransactions>
            </Container>
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    <ContainerModal>
                        <FormEditModal closeModal={handleCloseModal} transactionData={transactionUpdate!} />
                    </ContainerModal>
                </div>
            )}
        </>
    )
}