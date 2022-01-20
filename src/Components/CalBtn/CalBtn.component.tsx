import React, {FC} from 'react';
import { Grid, Button } from '@mui/material';
import { CalBtnProps } from './CalBtn.types'
import { useStyles } from './CalBtn.styles'

const CalBtn:FC<CalBtnProps> = ({ xs, symbol }) => {
    const classes = useStyles()
    return (
        <Grid item container xs={xs} justifyContent='center' alignItems='center' >
            <Button 
                variant="outlined" 
                classes={{
                    root: classes.root
                }}
            >
                {symbol}
            </Button>
        </Grid>
    )
}

export default CalBtn