import React, { useEffect, useRef } from 'react'
import { ImCross } from "react-icons/im";

const ImportWallet = ({setOpen, open}) => {
    const dialogRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOpen]);
  return (
    <div className='dialog' ref={dialogRef}>
       <div className='title'>
        <h1>Import Wallet</h1>
        <i onClick={() => setOpen(!open)}><ImCross /></i>
       </div>
       <form>
        <label>Enter your wallet name:</label>
        <input />
        <label>Enter your Mnemonic:</label>
        <input />
       </form>
        <button>Submit</button>
    </div>
  )
}

export default ImportWallet