
import React ,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
function CheckBoxExample(){
  const [checked,setChecked]=React.useState(true);
  return(
    <div>
      <FormControlLabel
      control={
        <Checkbox
    checked={checked}
    size="large"
    onChange={(e)=>setChecked(e.target.checked)}
    inputProps={{"aria-label":"primary checkbox"}}
    />
      }
      label="test-checking"
      />
   
    </div>
  )
}

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <TextField
        variant='filled'
        color='secondary'
        type='email'
        //label=' '
       // value=''
        placeholder='amannitp272@gmail.com'
        />
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
