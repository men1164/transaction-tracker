import styles from "./Home.module.css"

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => (
        <li key={transaction.docId}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>{transaction.amount} ฿</p>
        </li>
      ))}
    </ul>
  )
}
