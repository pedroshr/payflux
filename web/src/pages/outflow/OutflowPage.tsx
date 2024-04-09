import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContainerTransactions, Table, TableCell, TableHeader, TableRow } from "../../styles/home";
import { Transactions } from "../home/HomePage";
import { format } from "date-fns";
import { ContainerTitle, SpanAmount, SpanTitle, Title } from "../../styles/out-in";

export default function OutflowPage() {
    const [outflowTransactions, setoutflowTransactions] = React.useState<Transactions[]>([])
    const [totalOut, setTotalOut] = React.useState<number>(0)

    useEffect(() => {
        fetch('http://localhost:8080/transaction/all/out').then(response => response.json())
            .then(data => setoutflowTransactions(data))

        fetch('http://localhost:8080/transaction/dashboard').then(response => response.json())
            .then(data => setTotalOut(data.totalOut))
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