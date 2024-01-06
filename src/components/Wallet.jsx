import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { CiCirclePlus } from 'react-icons/ci';
import {
  Wrapper,
  Button,
  ItemWrapper,
  WalletGrid,
  GridHeading,
  Divider,
} from '../styled/theme';
import ImportWallet from './ImportWallet';
// ... (import statements)

const Wallet = () => {
  const ITEMS_PER_PAGE = 5;

  const [wallet, setWallet] = React.useState([
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      holding: '0.00256',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      holding: '0.00256',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png',
    },
    {
      id: 3,
      name: 'Litecoin',
      symbol: 'LTC',
      holding: '0.00256',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Litecoin.svg/1200px-Litecoin.svg.png',
    },
    {
      id: 4,
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      holding: '0.00256',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BCH_Logo.svg/1200px-BCH_Logo.svg.png',
    },
    {
      id: 5,
      name: 'XRP',
      symbol: 'XRP',
      holding: '0.00256',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BCH_Logo.svg/1200px-BCH_Logo.svg.png',
    },
    {
      id: 6,
      name: 'XRP',
      symbol: 'XRP',
      holding: '0.00256',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BCH_Logo.svg/1200px-BCH_Logo.svg.png',
    },
  ]);

  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(wallet.length / ITEMS_PER_PAGE);

  const paginatedWallet = wallet.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Wrapper>
      <div>
        <Button onClick={() => setOpen(!open)}>
          <CiCirclePlus /> Import Wallet
        </Button>
      </div>
      {open && <ImportWallet setOpen={setOpen} open={open} />}
      <ItemWrapper>
        <p>Total Coins - {wallet.length}</p>
        <Divider />
        <GridHeading>
          <p>Coins</p>
          <p>Holding</p>
          <p>Actions</p>
        </GridHeading>
        {paginatedWallet.map((coin) => (
          <WalletGrid key={coin.id}>
            <div>
              <p>{coin.name}</p>
            </div>
            <div>
              <p>{coin.holding}</p>
            </div>
            <div>
              <p>
                <MdDeleteOutline />
              </p>
            </div>
          </WalletGrid>
        ))}
        {totalPages > 1 && (
          <div className=''>
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <div>
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
            
          </div>
        )}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Wallet;
