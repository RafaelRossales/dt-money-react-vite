import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { NewTransactionFormInputs } from "../components/NewTransactionModal";

type Transaction = {
    id:number;
    description:string;
    type:'income' | 'outcome';
    price:number;
    category:string;
    createdAt:string
}

interface CreateTransaction{
    description:string;
    price:number;
    category:string;
    type:'income' | 'outcome'
}


interface TransactionContextType{
    transactions:Transaction[],
    fetchTransactions:(query?:string)=>Promise<void>
    createTransaction:(data:CreateTransaction)=>Promise<void>
}

interface TransactionProviderProps{
    children:React.ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}:TransactionProviderProps){

    const [transactions,setTransactions ]= useState<Transaction[]>([]);

    async function createTransaction(data:CreateTransaction){
        
        const { description, price, category ,type } = data;

        const response = await api.post('/transactions',{
            description, 
            price, 
            category ,
            type,
            createdAt:new Date()
        });

        setTransactions(state => [response.data,...state])
    }

    async function fetchTransactions(query?:string){        
        const response = await api.get('/transactions',{
            params:{
                description:query
            }
        })
        setTransactions(response.data)
    }


    useEffect(()=>{
        fetchTransactions()
    },[])



    return(
        <TransactionContext.Provider value={{ transactions, fetchTransactions,createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext;