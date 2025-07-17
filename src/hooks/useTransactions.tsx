import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const transactionsPlaceholder = [
  {
    id: 1,
    amount: 1000,
    category: 'Dev',
    createdAt: '2021-02-12 09:00:00',
    title: 'freelancer de website',
    type: 'deposit',
  },
  {
    id: 2,
    amount: 1000,
    category: 'Dev',
    createdAt: '2021-02-12 09:00:00',
    title: 'freelancer de website',
    type: 'deposit',
  },
] as Transaction[]

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    // api.get('/transactions')
    //   .then(response => setTransactions(response.data.transactions))
    setTransactions(transactionsPlaceholder)
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}