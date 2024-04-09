import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContainerTransactions, Table, TableCell, TableHeader, TableRow } from "../../styles/home";
import { Transactions } from "../home/HomePage";
import { format } from "date-fns";
import { ContainerTitle, SpanAmount, SpanTitle, Title } from "../../styles/out-in";

export default function ReceivedPage() {
    const [receivedTransactions, setReceivedTransactions] = React.useState<Transactions[]>([])
    const [totalIn, setTotalIn] = React.useState<number>(0)

    useEffect(() => {
        fetch('http://localhost:8080/transaction/all/in').then(response => response.json())
            .then(data => setReceivedTransactions(data))

        fetch('http://localhost:8080/transaction/dashboard').then(response => response.json())
            .then(data => setTotalIn(data.totalIn))
    }, [])

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
                                    <TableCell style={{ width: '20%' }}>{format(new Date(transaction.date), 'MM/dd/yyyy')}</TableCell>
                                </TableRow>
                            )
                        })}
                    </Table>
                </ContainerTransactions>
            </Container>
        </>
    )
}