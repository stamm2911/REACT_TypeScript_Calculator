import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root:{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.75)',
            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.5)',
            }
        }
    })    
)