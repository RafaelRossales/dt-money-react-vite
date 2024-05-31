import { MagnifyingGlass } from "phosphor-react";
import { ContainerSearch, FilterContainer, FilterPill, SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { useContext } from "react";
import TransactionContext from "../../../../contexts/TransactionContext";




const searchFormsSchema = z.object({
    query: z.string().min(3).max(100).optional()
})

type SearchFormInputs = z.infer<typeof searchFormsSchema>;

export function SearchForm(){

    const {register, handleSubmit, formState: {isSubmitting}} = useForm();
    const { fetchTransactions } = useContext(TransactionContext);

    async function handleSearchTransactions(data:SearchFormInputs){
        console.log('handleSearchTransactions',data)
        await fetchTransactions(data.query)

    }

    return(
        <ContainerSearch>
            <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Busque por transação" {...register('query')} />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass/>
                Buscar
            </button>
            </SearchFormContainer>

            <FilterContainer>
                <FilterPill>Descrição</FilterPill>
                <FilterPill>Tipo</FilterPill>
                <FilterPill>Data</FilterPill>
                <FilterPill>Valor</FilterPill>
            </FilterContainer>

        </ContainerSearch>
    )
}