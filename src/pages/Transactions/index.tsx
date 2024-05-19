import { useContext } from "react";
import { Header } from "../../components/Header";
import Summary from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionTable, TransactionsContainer } from "./styles";
import TransactionContext from "../../contexts/TransactionContext";


export function Transaction(){
    const { transactions } = useContext(TransactionContext)

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