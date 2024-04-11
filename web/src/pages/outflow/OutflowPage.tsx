import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContainerModal, ContainerTransactions, Table, TableCell, TableHeader, TableRow } from "../../styles/home";
import { Transactions } from "../home/HomePage";
import { ContainerTitle, SpanAmount, SpanTitle, Title } from "../../styles/out-in";
import { FormEditModal } from "../../components/FormEditModal";

export default function OutflowPage() {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [outflowTransactions, setOutflowTransactions] = React.useState<Transactions[]>([])
    const [totalOut, setTotalOut] = React.useState<number>(0)
    const [transactionUpdate, setTransactionUptade] = React.useState<Transactions>()

    useEffect(() => {
        fetch('http://localhost:8080/transaction/all/out').then(response => response.json())
            .then(data => setOutflowTransactions(data))

        fetch('http://localhost:8080/transaction/dashboard').then(response => response.json())
            .then(data => setTotalOut(data.totalOut))

        document.addEventListener('transactionEdited', updateReceivedTransactions);

        return () => {
            document.removeEventListener('transactionEdited', updateReceivedTransactions);
        }
    }, [])

    function deleteTransaction(id: string) {
        const updateTransactions = outflowTransactions.filter(transaction => transaction.id !== id)
        setOutflowTransactions(updateTransactions)

        fetch(`http://localhost:8080/transaction/${id}`, { method: 'DELETE' })
            .then(() => {
                console.log("Transaction deleted!")
                document.dispatchEvent(new Event('transactionDeleted'));
                setTotalOut(totalOut - outflowTransactions.find(transaction => transaction.id === id)?.amount!)
            })
            .catch(error => console.error("Error: ", error))
    }

    function updateReceivedTransactions() {
        fetch('http://localhost:8080/transaction/all/out').then(response => response.json())
            .then(data => setOutflowTransactions(data))

        fetch('http://localhost:8080/transaction/dashboard').then(response => response.json())
            .then(data => setTotalOut(data.totalOut))
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
                        <Title>Outflow</Title>
                        <div>
                            <SpanTitle>Total out</SpanTitle>
                            <SpanAmount>${totalOut}</SpanAmount>
                        </div>
                    </ContainerTitle>

                    <Table>
                        <TableRow>
                            <TableHeader style={{ width: '35%' }}>Name</TableHeader>
                            <TableHeader style={{ width: '25%' }}>Value</TableHeader>
                            <TableHeader style={{ width: '25%' }}>Tag</TableHeader>
                            <TableHeader style={{ width: '20%' }}>Date</TableHeader>
                        </TableRow>
                        {outflowTransactions.map(transaction => {
                            return (
                                <TableRow key={transaction.id}>
                                    <TableCell style={{ width: '35%' }} className="name">
                                        <img src="../src/assets/out.svg" alt="out" className="icon-out" />
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