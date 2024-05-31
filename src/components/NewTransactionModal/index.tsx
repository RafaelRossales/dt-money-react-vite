import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useContext } from "react";
import TransactionContext from "../../contexts/TransactionContext";


const newTransctionFormSchema = z.object({
    description:z.string(), 
    type:z.enum(['income', 'outcome']),
    price:z.number(),
    category:z.string(),
});

export  type NewTransactionFormInputs = z.infer<typeof newTransctionFormSchema>;


export function NewTransactionModal(){

    const { 
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } =useForm<NewTransactionFormInputs>({
        resolver:zodResolver(newTransctionFormSchema)
    });

    const { createTransaction } = useContext(TransactionContext)

   async  function handleCreateNewTransaction(data:NewTransactionFormInputs){
        createTransaction(data)
        reset();
    }

    return(
        <Dialog.Portal>
        <Overlay>
            <Content>
                <Dialog.Title> Nova Transação </Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type="text" 
                        placeholder="Descrição" 
                        required
                        {...register('description')}
                    />
                    <input 
                        type="number" 
                        placeholder="Preço"
                        {...register('price', { valueAsNumber: true})}
                    />
                    <input 
                        type="text" 
                        placeholder="Categoria"
                        {...register('category')}
                    />

                    <Controller 
                    control={control} 
                    name="type" 
                    render={({field})=>{
                        return(
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton variant="income" value="income">
                                    <ArrowCircleUp/>
                                    Entrada
                                </TransactionTypeButton>
                                <TransactionTypeButton variant="outcome" value="outcome">
                                    <ArrowCircleDown/>
                                    Saída
                                </TransactionTypeButton>
                            </TransactionType>
                        )
                    }}/>

                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Overlay>
    </Dialog.Portal>
    )
}