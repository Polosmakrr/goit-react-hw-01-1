import Transactions from '../Transaction/Transaction';

function TransactionsTable({ transactions }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <Transactions
            id={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </tbody>
      ))}
    </table>
  );
}

export default TransactionsTable;
