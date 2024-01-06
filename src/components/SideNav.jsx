import React from 'react';
import { SideBar, SideLink, NavBtn } from '../styled/theme';
import { CiWallet } from 'react-icons/ci';
import { GrTransaction } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';


const SideNav = () => {
  const location = useLocation();

  return (
    <SideBar>
        <div className='links_wrapper'>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <SideLink className={location.pathname === '/' ? 'active' : ''}>
              <CiWallet />Wallets
            </SideLink>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/transaction'>
            <SideLink className={location.pathname === '/transaction' ? 'active' : ''}>
              <GrTransaction />Last Transaction
            </SideLink>
          </Link>
        </div>
        <NavBtn>Support</NavBtn>
    </SideBar>
  );
};

export default SideNav;
