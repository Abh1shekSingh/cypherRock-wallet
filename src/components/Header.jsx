import React from 'react'
import logo from "../assets/cysunc logo.svg"
import { SyncedBtn, Nav } from '../styled/theme'
import { FiRefreshCw } from "react-icons/fi";
const Header = () => {
  return (
    <Nav>
        <div>
            <img src={logo} alt="logo" width={100} />
        </div>
        <SyncedBtn><FiRefreshCw />Synced</SyncedBtn>
    </Nav>
  )
}

export default Header