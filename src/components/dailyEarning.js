import React,{useState, useEffect} from 'react';
import EarningCard from './earningCard';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import wallet from './../utils/wallet.png'


const useStyles = makeStyles((theme) => ({
  div:{

textAlign:'center',

'& > p':{
    fontSize:'2.3rem',
    '& strong':{
        color:"#FF4F5B"
      }
}
  },
  allCards:{
      width:'65%',
      margin:'0 auto',
      display:'flex',
      justifyContent:'center'
  },
  total:{
      width:'60%',
      display:'flex',
      margin:'0 auto',
      textAlign:'left',
      marginBottom:'2rem',
      alignItems:'center',
      '& > img' :{
          width:'80px'
      }
  },
  walletMoney:{
      textAlign:'center',
     
      alignItems:'center',
      marginLeft:'1rem',
      '& > p':{
          margin:0,
          fontSize:'1.8rem',
          color:'#008000',
      }
  }
      }));

const DailyEarning = () => {
    const classes = useStyles();
    const [jobs, setJobs]=useState([
{
    jobName:'Main driver Executive',
    clientName:'flipkart',
    timings:'10:00 AM - 5:00 PM',
    salary:'750'
},
{
    jobName:'Main driver Executive',
    clientName:'Swiggy',
    timings:'5:00 PM - 7:00 PM',
    salary:'300'
},
{
    jobName:'Main driver Executive',
    clientName:'Zomato',
    timings:'7:00 PM - 9:00 PM',
    salary:'200'
}
    ]);
    const [total, setTotal] =useState(0);

    useEffect(()=>{
let sum=0;

jobs.forEach((job) => {
    sum+= job.salary - '0';
})
setTotal(sum);
    },[]);

    return ( <div className={classes.div}>
        <Navbar></Navbar>
        <p>My <strong>daily earning</strong></p>
        <div className={classes.total}>
            <img src ={wallet} alt="wallet"></img>
            <div className={classes.walletMoney}>

            <p>{total}</p>
            <strong>Total (Rs)</strong>
            </div>
        </div>
        <div className={classes.allCards}>
            {
                jobs.map(({jobName, clientName, timings, salary})=>(
                    <EarningCard jobName={jobName}
                    clientName={clientName}
                    timings={timings}
                    salary={salary}></EarningCard>
                ))
            }
    
        </div>
    </div> );
}
 
export default DailyEarning;