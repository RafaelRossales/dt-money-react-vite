import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import Summary from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";
const URL:string = import.meta.env.VITE_API_URL;

interface ITransaction{
    id:number;
    description:string;
    type:'income' | 'outcome';
    price:number;
    category:string;
    createdAt:string
}


export function Transaction(){

    const [transactions,setTransactions ]= useState<ITransaction[]>([]);


    async function loadTransaction(){
        const response = await fetch(`${URL}/transactions`)
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(()=>{
        loadTransaction()
    },[])


    return(
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
            <TransactionTable>
                <tbody>
                    {transactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>{transaction.price}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}