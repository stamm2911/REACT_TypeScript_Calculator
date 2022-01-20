import React from 'react';
import './App.css';
import { Grid, Button } from '@mui/material';



function App() {
  return (
    <Grid container justifyContent='center' paddingTop={10} height={'70vh'}>
      <Grid item container xs={10} md={4}>
        <Grid item container height={'20%'} style={{backgroundColor: 'grey'}}>
          Hola
        </Grid>
        <Grid item container xs={12} height={'80%'}>
          <Grid item container xs={6} justifyContent='center' alignItems='center' >
            <Button variant="outlined" style={{width:'100%', height:'100%', backgroundColor: 'rgba(255,255,255,0.6)'}}>1</Button>
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'rgba(255,255,255,0.6)'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={3} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
          <Grid item container xs={6} justifyContent='center' alignItems='center' style={{backgroundColor: 'red'}}>
            1
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
