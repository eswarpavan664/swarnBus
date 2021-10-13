/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React,{useState,useEffect} from 'react'
import firebaseDB from '../firebase';
import '../index.css'
import '../card.css'
import '../App.css'
import { auth } from '../firebase';
require('firebase/auth');
const CardDisplay=(props)=>{
  const deleteHandler = key =>{
      firebaseDB.child(`driversdetails/${key}`).remove(
          err=>{
              if(err){
                  console.log(err)
              }
          }
      )
  }
 
  return(
      <article id="uploadcard"> 
       <div class="text"> 
          <p style={{textAlign:'center'}} id="teststyle">Driver Name:- {props.drivername}</p>
             <p style={{textAlign:'center'}} id="teststyle">Bus No:-{props.Bus}</p>
              <p style={{textAlign:'center'}} id="teststyle">Email id:- {props.userid}</p>
              <p style={{textAlign:'center'}} id="teststyle">Starting point:- {props.point}</p>
             
          <div class="card-body">
           

       <button className="btn btn-danger"
                 onClick={()=> deleteHandler(props.k)}
              >Delete</button>  

          </div>
      
     </div>
     </article>
  )
}


function Form(props) {

  const [Driverdetails,setDriverdetails] = useState({
    Name:"",
    Busnumber:"",
    mail:"",
    startingpoint:""
})

const [DriverLocations,setDriverLocations] = useState({
    Latitude:0,
    Longitude:0,
    email:"" 
})

const {Name,Busnumber,mail,startingpoint} = {...Driverdetails}
 
  const [getData,setGetData] = useState({});
  
  useEffect(()=>{
          firebaseDB.child('driversdetails').on('value',details=>{
              console.log(details.val());
              setGetData(details.val());
          })
  },[])

  const changeHandler = e =>{
    setDriverdetails({...Driverdetails,[e.target.name]:e.target.value});
    if(mail){
        setDriverLocations({
            email:mail,
            Latitude:16.432983,
            Longitude:81.696617
        })
    
    }
}

const submitHandler = async(e) =>{
  e.preventDefault();
  var dataAdded = await firebaseDB.child('driversdetails').push(
      
       Driverdetails,
      err=>{
          if(err){
              console.log(err);
          }
          else{
              console.log("done")
          }
      }
  )
   setDriverdetails({
    Name:"",
    Busnumber:"",
    mail:"",
    startingpoint:""
  })
  

  var data = await firebaseDB.child('BusLocations').push(
      
     DriverLocations,
   err=>{
       if(err){
           console.log(err);
       }
       else{
           console.log("done")
       }
   }
)
setDriverdetails({
    email:"",
    Latitude:16.432983,
    Longitude:81.696617
}) 
signUp();
}

const signUp = e =>{
     const name=mail
    const password="123456789"
    auth.createUserWithEmailAndPassword(name,password).then(
        user => console.log(user)
        ).catch(err => console.log(err))
}
 
 
return(
  <div>
           
   
          <div class="row">
  
              {getData &&
              Object.keys(getData).map(key=>
                  <CardDisplay drivername={getData[key].Name} Bus={getData[key].Busnumber} userid={getData[key].mail} point={getData[key].startingpoint} k={key}/>
              )
              }
  
      </div>
     
          <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off" style={{marginTop:'5%'}}>
              <div className="form-group">
            
              <div className="col-sm-4">
                  <input type="text" className="form-control" placeholder="DriverName" name="Name" value={Name} onChange={changeHandler}/>
              </div>
              </div>
              
               
  
              <div className="form-group">
               
              <div className="col-sm-4">          
                  <input type="email" className="form-control" placeholder="email" name="mail" value={mail} 
                  onChange={changeHandler}/>
              </div>
              </div>

              
              
              <div className="form-group">
               
              <div className="col-sm-4">          
                  <input type="text" className="form-control" placeholder="Bus Number" name="Busnumber" value={Busnumber} 
                  onChange={changeHandler}/>
              </div>
              </div>
  
              <div className="form-group">
               
               <div className="col-sm-4">          
                   <input type="text" className="form-control" placeholder="staring point" name="startingpoint" value={startingpoint} 
                   onChange={changeHandler}/>
               </div>
               </div>
  
            
              <div className="form-group">        
              <div className="col-sm-offset-2 col-sm-10">
                  <input type="submit" className="btn btn-success" 
                  value="Submit" />
              </div>
              </div>
      </form>
      
       
          </div>
      )
   
}

export default Form;
