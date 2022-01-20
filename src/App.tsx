import React, {FC} from 'react';
import './App.css';
import { Grid, Button } from '@mui/material';
import CalBtn from './Components/CalBtn/CalBtn.component'

const App: FC = () => {
  // const symbolsArray = ['AC','DEL','÷','1','2','3','*','4','5','6','+','7','8','9','-','.','0','=']

  return (
    <Grid container justifyContent='center' paddingTop={10} height={'70vh'}>
      <Grid item container xs={10} sm={6} lg={4} style={{borderRadius:'20px'}}>
        <Grid item container height={'20%'} style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: 20}}>
          Hola
        </Grid>
        <Grid item container xs={12} height={'80%'}>
          <CalBtn xs={6} symbol={'AC'}/>
          <CalBtn xs={3} symbol={'DEL'}/>
          <CalBtn xs={3} symbol={'÷'}/>
          <CalBtn xs={3} symbol={'1'}/>
          <CalBtn xs={3} symbol={'2'}/>
          <CalBtn xs={3} symbol={'3'}/>
          <CalBtn xs={3} symbol={'*'}/>
          <CalBtn xs={3} symbol={'4'}/>
          <CalBtn xs={3} symbol={'5'}/>
          <CalBtn xs={3} symbol={'6'}/>
          <CalBtn xs={3} symbol={'+'}/>
          <CalBtn xs={3} symbol={'7'}/>
          <CalBtn xs={3} symbol={'8'}/>
          <CalBtn xs={3} symbol={'9'}/>
          <CalBtn xs={3} symbol={'-'}/>
          <CalBtn xs={3} symbol={'.'}/>
          <CalBtn xs={3} symbol={'0'}/>
          <CalBtn xs={6} symbol={'='}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
