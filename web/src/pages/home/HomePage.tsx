import { Btn } from "../../components/ButtonHome/style";
import { ContainerBtn, Container, ContainerTransactions, ContainerModal, ContainerTitleHome, ContainerTotal, DashboardTitle, TransactionTitle, Table, TableCell, TableHeader, TableRow } from "../../styles/home";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { TotalItem } from "../../components/TotalItem";
import React, { useEffect } from "react";
import { FormAddModal } from "../../components/FormAddModal";
import axios from "axios";
import { format } from "date-fns";

export type Transactions = {
    id: string;
    name_trade: string;
    type_trade: string;
    amount: number;
    tag: string;
    date: string;
}


export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [totalIn, setTotalIn] = React.useState<number>(0)
    const [totalOut, setTotalOut] = React.useState<number>(0)
    const [latestTransactions, setLatestTransactions] = React.useState<Transactions[]>([])

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const response = await axios.get('http://localhost:8080/transaction/dashboard');
                setTotalIn(response.data.totalIn);
                setTotalOut(response.data.totalOut);
                setLatestTransactions(response.data.latestTransaction);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDashboard();

        const updateDashboard = () => {
            fetchDashboard();
        };

        document.addEventListener('transactionAdded', updateDashboard);
        document.addEventListener('transactionEdited', updateDashboard);
        document.addEventListener('transactionDeleted', updateDashboard);

        return () => {
            document.removeEventListener('transactionAdded', updateDashboard);
            document.removeEventListener('transactionEdited', updateDashboard);
            document.removeEventListener('transactionDeleted', updateDashboard);
        }
    }, [])

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
                <ContainerTitleHome>
                    <DashboardTitle>Dashboard</DashboardTitle>
                    <ContainerBtn>
                        <Btn color="#969696" onClick={handleOpenModal}>New Transaction</Btn>
                    </ContainerBtn>
                </ContainerTitleHome>
                <ContainerTotal>
                    <TotalItem color="#4F7B23" title="Total in" total={totalIn} />
                    <TotalItem color="#D43E3E" title="Total out" total={totalOut} />
                </ContainerTotal>
                <ContainerTransactions>
                    <TransactionTitle>Latest transactions</TransactionTitle>
                    <Table>
                        <TableRow>
                            <TableHeader style={{ width: '35%' }}>Name</TableHeader>
                            <TableHeader style={{ width: '25%' }}>Value</TableHeader>
                            <TableHeader style={{ width: '25%' }}>Tag</TableHeader>
                            <TableHeader style={{ width: '20%' }}>Date</TableHeader>
                        </TableRow>
                        {latestTransactions.map(transaction => {
                            return (
                                <TableRow id={transaction.id}>
                                    <TableCell style={{ width: '35%' }} className="name">
                                        {transaction.type_trade === 'in' ? (<img src="../src/assets/in.svg" alt="in" className="icon-in" />) : (<img src="../src/assets/out.svg" alt="out" className="icon-out" />)
                                        }<span style={{ width: '100%', textAlign: 'center' }}>{transaction.name_trade}</span>
                                    </TableCell>
                                    <TableCell style={{ width: '25%' }}>{transaction.amount}</TableCell>
                                    <TableCell style={{ width: '25%' }}>{transaction.tag}</TableCell>
                                    <TableCell style={{ width: '20%' }}>{new Date(transaction.date).toISOString().split('T')[0]}</TableCell>
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
                        <FormAddModal closeModal={handleCloseModal} />
                    </ContainerModal>
                </div>
            )}
        </>
    )
}