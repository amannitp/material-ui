import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonGroup variant='contained' size='large' onClick={()=>alert("hello world")}>
        <Button
        startIcon={<SendIcon/>}
        style={{color:"white",background:"green"}}
        >
        Add item
        </Button>
        <Button
        endIcon={<DeleteIcon/>}
        style={{color:"white",background:"red"}}
        >
        Delete item
        </Button>
      </ButtonGroup>
     

       {/* button component */}
      {/* <Button 
      startIcon={<SendIcon/>}
      //startIcon={<DeleteIcon/>}
      // disabled
      style={{fontSize:"1rem", color:"white",background:"green",padding:"1rem"}}
      size='large'
      onClick={()=>alert('hello world')}
       href='#' 
       variant='contained' 
       color='primary'>
         hello world
      </Button> */}
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
