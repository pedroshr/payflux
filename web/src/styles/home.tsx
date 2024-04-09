import styled from 'styled-components';


export const Container = styled.div`
    display; flex;
    align-items: center;
    margin-left: 330px;
    width: 100h;
    height: 100vh;
    justify-content: center;
`

export const ContainerTitleHome = styled.div`
    display: flex;
    height: 165px;
    justify-content: space-between;
    align-items: center;
    padding: 60px 200px;
`

export const DashboardTitle = styled.h1`
    display: flex;
    color: #323232;
    font-size: 60px;
`

export const ContainerBtn = styled.div`
    display: flex;
`

export const ContainerTotal = styled.div`
    height: 245px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
    margin-bottom: 35px;
`

export const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerTransactions = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 0 200px;
`

export const TransactionTitle = styled.h1`
    font-size: 30px;
    font-weight: 400;
    color: #323232;
    margin-bottom: 13px;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

export const TableRow = styled.tr`
    display: flex;
    justify-content: space-between;
    border: none;
`

export const TableHeader = styled.th`
    font-size: 25px;
    font-weight: 300;
    padding: 12px 0;
    align-items: center;
    justify-content: center;
    color: #323232;
    background-color: #D9D9D9;
    border-radius: 20px;
    margin: 0 6px;
`

export const TableCell = styled.td`
display: flex;
align-items: center;
justify-content: center;
padding: 12px;
font-size: 25px;
font-weight: 400;
color: #323232;
padding: 20px 0;

&.name {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

