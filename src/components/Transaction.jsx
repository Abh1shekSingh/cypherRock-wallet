import React from 'react';
import { GoArrowDownLeft } from 'react-icons/go';
import {
  Wrapper,
  SyncedBtn,
  ItemWrapper,
  TransactionGrid,
  TransactionGridHeading,
  Divider,
  Button,
} from '../styled/theme';

const Transaction = () => {
  const ITEMS_PER_PAGE = 5;

  const [transaction, setTransaction] = React.useState([
    // ... your transaction data
    {
      id: 1,
      date: '2021-05-12',
      time: '12:00',
      walletName: 'Bitcoin',
      Amount: '0.00256',
      Result:'Received',
      Status:'Success'
    },
    {
      id: 2,
      date: '2021-05-12',
      time: '12:00',
      walletName: 'Bitcoin',
      Amount: '0.00256',
      Result:'Received',
      Status:'Success'
    },
    {
      id: 3,
      date: '2021-05-12',
      time: '12:00',
      walletName: 'Bitcoin',
      Amount: '0.00256',
      Result:'Received',
      Status:'Success'
    },
    {
      id: 4,
      date: '2021-05-12',
      time: '12:00',
      walletName: 'Bitcoin',
      Amount: '0.00256',
      Result:'Received',
      Status:'Success'
    },
    {
      id: 5,
      date: '2021-05-12',
      time: '12:00',
      walletName: 'Bitcoin',
      Amount: '0.00256',
      Result:'Received',
      Status:'Success'
    },
    {
      id: 6,
      date: '2021-05-12',
      time: '12:00',
      walletName: 'Bitcoin',
      Amount: '0.00256',
      Result:'Received',
      Status:'Success'
    },
    {
      id: 7,
      date: '2021-05-12',
      time: '12:00',
      walletName: 'Bitcoin',
      Amount: '0.00256',
      Result:'Received',
      Status:'Success'
    },
  ]);

  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(transaction.length / ITEMS_PER_PAGE);

  const paginatedTransactions = transaction.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Wrapper>
      <h1>
        <SyncedBtn>Transactions</SyncedBtn>
      </h1>
      <ItemWrapper>
        <p>Total Transactions - {transaction.length}</p>
        <Divider />
        <TransactionGridHeading>
          <p>Date</p>
          <p>Wallet</p>
          <p>Amount</p>
          <p>Result</p>
          <p>Status</p>
        </TransactionGridHeading>
        {paginatedTransactions.map((coin) => (
          <TransactionGrid key={coin.id}>
            <div>
              <span style={{ display: 'block' }}>{coin.date}</span>
              <span style={{ display: 'block' }}>{coin.time}</span>
            </div>
            <div>
              <p>{coin.walletName}</p>
            </div>
            <div>
              <p>{coin.Amount}</p>
            </div>
            <div>
              <p>
                <GoArrowDownLeft />
                {coin.Result}
              </p>
            </div>
            <div>
              <p>{coin.Status}</p>
            </div>
          </TransactionGrid>
        ))}
        {totalPages > 1 && (
          <div>
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <Button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <Button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Transaction;
