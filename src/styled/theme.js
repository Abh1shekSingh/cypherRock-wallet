import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1A1F26;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const SyncedBtn = styled.h1`
    color: #E0B36A;
    font-size: 17px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width:90%;
    padding: 20px ;
    border-bottom: 1px solid #E0B36A;
`;

const SideBar = styled.div`
    display: flex;
    ${'' /* position: fixed; */}
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height:90%;
    background-color: #161C23;
    border-radius: 15px;
    margin:30px 0;
`;

const SideLink = styled.h1`
    color: #E0B36A;
    font-size: 17px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

`;

const NavBtn = styled.button`
    color: #ffffff;
    background-color: #E0B36A;
    font-size: 17px;
    width: 100%;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    gap: 10px;
    border: none;
    outline: none;
    padding: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:end;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
`;

const Button = styled.button`
  padding: 1em 1em;
  font-size: 14px;
  background-color: #161C23;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  text-transform: uppercase;
  border-radius: 10px;
  `;

  const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 2em;
  color: white;
  `;

  const WalletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 12em;
  background-color: #161C23;
  margin-bottom: 0.5em;
  padding: 0 3em;
  text-transform: uppercase;
  `;

  const TransactionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 5em;
  background-color: #161C23;
  margin-bottom: 0.5em;
  padding: 0 3em;
  text-transform: uppercase;
  `;

    const GridHeading = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12em;
    color: #E0B36A;
    margin-bottom: 0.5em;
    padding: 0 3em;
    `;

    const TransactionGridHeading = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5em;
    color: #E0B36A;
    margin-bottom: 0.5em;
    padding: 0 3em;
    `;


    const Divider = styled.div`
    border-bottom: 1px solid #E0B36A;
    width: 100%;
    `;
export {Main, SyncedBtn, Nav, SideBar, SideLink, NavBtn, Wrapper, Button, ItemWrapper, WalletGrid,TransactionGrid, TransactionGridHeading,GridHeading, Divider};