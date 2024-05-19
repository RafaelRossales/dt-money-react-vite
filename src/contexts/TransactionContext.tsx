import { createContext, useEffect, useState } from "react";
const URL:string = import.meta.env.VITE_API_URL;

type Transaction = {
    id:number;
    description:string;
    type:'income' | 'outcome';
    price:number;
    category:string;
    createdAt:string
}


interface TransactionContextType{
    transactions:Transaction[]
}

interface TransactionProviderProps{
    children:React.ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}:TransactionProviderProps){


    const [transactions,setTransactions ]= useState<Transaction[]>([]);

    async function loadTransaction(){
        const response = await fetch(`${URL}/transactions`)
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(()=>{
        loadTransaction()
    },[])



    return(
        <TransactionContext.Provider value={{ transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext;