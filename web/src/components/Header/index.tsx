import React, { useEffect, useState } from 'react';
import * as C from './style.tsx';
import axios from 'axios';

export const Header: React.FC = () => {
    const [balance, setBalance] = useState<number>(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get('http://localhost:8080/transaction/balance');
                setBalance(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBalance();

        const updateBalance = () => {
            fetchBalance();
        };

        document.addEventListener('transactionAdded', updateBalance);
        document.addEventListener('transactionEdited', updateBalance);
        document.addEventListener('transactionDeleted', updateBalance);

        return () => {
            document.removeEventListener('transactionAdded', updateBalance);
            document.removeEventListener('transactionEdited', updateBalance);
            document.removeEventListener('transactionDeleted', updateBalance);
        }
    }, [])

    return (
        <>
            <C.HeaderContainer>
                <C.ImgLogo src="./src/assets/payfluxlogo.svg" />
                <C.BalanceContainer>
                    <C.BalanceTextContainer>
                        <C.BalanceTitle>Balance</C.BalanceTitle>
                        <C.BalanceAmount>${balance}</C.BalanceAmount>
                    </C.BalanceTextContainer>
                    <C.ImgBalanceLogo src="./src/assets/cash-dolar.svg" />
                </C.BalanceContainer>
            </C.HeaderContainer>
        </>
    )
}