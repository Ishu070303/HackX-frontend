import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 card:{
     width:'28%',
     boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
     padding:'1rem',
     margin:'1rem',
     borderRadius:'5px',
     textAlign:'left',
     '& > p':{
         margin:'0'
     }
 },
 moneyDiv:{
     width:'100%',
     display:'flex',
     flexDirection:'row-reverse',
     marginTop:'1.5rem'
 },
 money:{
     fontSize:'1.6rem',
     fontWeight:'bold',
     color:'#32CD32'
 }
     
      }));

const EarningCard = ({jobName, clientName, timings, salary}) => {
    const classes = useStyles();
    return ( <div className={classes.card}>
        <p><strong>{jobName}</strong></p>
        <p>{clientName}</p>
        <p>{timings}</p>
        <div className={classes.moneyDiv}>
            <div className={classes.money}>{salary} Rs</div>
        </div>
    </div> );
}
 
export default EarningCard;