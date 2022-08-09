
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
import { styled,createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { orange } from '@mui/material/colors';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const theme=createTheme({
  typography:{
       h1:{
        fontSize:30,
        marginBottom:10
       }
  },
   palette:{
    primary:{
      main:orange[500],
    }
   }
})
const useStyle=styled({
  root:{
    background:'green',
    border:0,
    borderRadius:15,
    color:'white',
    padding:'0 30px'
    
  }
})

function ButtonStyle(){
  const classes=useStyle();
  return <Button className='classes.root'>Button Style</Button>
}
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
    
      <ThemeProvider theme={theme}>
        <Container maxWidth='md'>
        
      <div className="App">
      <header className="App-header">
      <Typography variant='h1' component={'div'}>Welcome to MUI</Typography>
        <ButtonStyle/>
        <Grid container spacing={6} justifyContent={'center'}>
        <Grid item>
          <Paper style={{height:100,width:80,}} elevation={6} varient="string" square />
        </Grid>
        <Grid item>
          <Paper style={{height:100,width:80}} elevation={6} varient="string" square />
        </Grid>
        <Grid item>
          <Paper style={{height:100,width:80}} elevation={6} varient="string" square />
        </Grid>
        </Grid>
        {/* <TextField
        variant='filled'
        color='secondary'
        type='email'
        //label=' '
       // value=''
        placeholder='amannitp272@gmail.com'
        /> */}
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
      </Container>
      </ThemeProvider>
  );
}

export default App;
