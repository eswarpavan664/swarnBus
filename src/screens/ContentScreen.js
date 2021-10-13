/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import firebaseDB from '../firebase';
import Form from '../components/Form';
import MapComponent from '../components/Map'
function ContentScreen(props) {
    const [getData,setGetData] = useState({});
    useEffect(()=>{
            firebaseDB.child('driversdetails').on('value',details=>{
                console.log(details.val());
                setGetData(details.val());
            })
    },[])


   if(props.pagename==="Driver")  
   {
     return  <Form/>
   }   
  return(
    <>
        <MapComponent/>
  </>
  )
    
}

export default ContentScreen;
