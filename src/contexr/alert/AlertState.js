import React,{useReducer} from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';
 const AlertState=props=>{
     const initialState=null;
    //  set alert
    const setAlert=(msg,typ)=>{
        // this.setState({alert:{msg:msg,type:typ}}) 
        // setAlert({msg:msg,type:typ})
        dispatch({type:SET_ALERT,payload:{msg:msg,type:typ}})
        setTimeout(()=>dispatch({type:REMOVE_ALERT}),5000)
      }

    const [state,dispatch]=useReducer(AlertReducer,initialState)

    return <AlertContext.Provider
    value={{
        alert:state,
        setAlert,
    }}
    >
        {props.children}
    </AlertContext.Provider>

 }

 export default AlertState