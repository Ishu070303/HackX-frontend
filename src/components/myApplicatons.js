import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApplicationCard from './ApplicationCard';
import axios from 'axios';
import Navbar from './navbar';

const useStyles = makeStyles((theme) => ({
myApp:{
    width:'100%',
    textAlign:'center',
    '& > p':{
        fontSize:'2rem',
        margin:'1rem 0',
        '& > strong':{
            color:"#FF4F5B" 
        }
    }
},
app:{
    backgroundColor:'#EEEEEE',
    border:'4px solid 	#E5E5E5',
    width:'70%',
    margin:'1rem auto',
    padding:'2rem',
    borderRadius:'5px',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    maxHeight:'500px',
    boxSizing:'border-box',
    overflow:'scroll',
}
 
  }));
const MyApplication = () => {
    const [data, setData] =useState([])
    const classes = useStyles();
    useEffect(() => {
        const fetchData = async () => {
      
        
        
      
            try {
        
        //  console.log(Url)
              const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/apply/allApplications/${localStorage.getItem("userId")}`);
              console.log(data);

              let l =[];

              data.AllApplication?.forEach(({jobName,clientName,status, date,location}) => {
                  const appDate = new Date(date);
                l.push({
                    jobName,
                    clientName,
                    status,
                    date:`${appDate.getDate()}/${appDate.getMonth()}/${appDate.getFullYear()}`,
                    location
                })
              })
              setData( prevSate => {
                return [...prevSate, ...l]})
              console.log(l)
       
            
            } catch (error) {
              console.log(error.response.data.error);
            }
          };
          fetchData();
        },[]);

    return ( <div className={classes.myApp}>
        <Navbar></Navbar>
        <p>My <strong>Applications</strong></p>
        <div  className={classes.app} >
            {
                data.map(({jobName, clientName, location, status, date, street}) =>(
                <ApplicationCard jobName={jobName}
                clientName={clientName}
                location={location}
                status={status}
                date={date}></ApplicationCard>  ))
            }

            </div>
          
    </div> );
}
 
export default MyApplication;