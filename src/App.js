
import React ,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Checkbox from '@mui/material/Checkbox';

function CheckBoxExample(){
  const [checked,setChecked]=React.useState(true);
  return(
    <div>
    <Checkbox
    checked={checked}
    onChange={(e)=>setChecked(e.target.checked)}
    inputProps={{"aria-label":"primary checkbox"}}
    />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <CheckBoxExample/>
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
