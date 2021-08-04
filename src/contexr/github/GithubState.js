import React,{useReducer} from 'react';
import axios from 'axios'
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
    SEARCH_USERS,
    GET_USERS,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    // SET_LOADING,
    // SET_ALERT,
    // REMOVE_ALERT
} from '../types'

let githubClientId;
let githubClientSecret;


// checking environment if is in production or not
if(process.env.NODE_ENV !=='production'){
    // means if we are not in production
    githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else{
    // if we are in production
    githubClientId=process.env.GITHUB_CLIENT_ID;
    githubClientSecret=process.env.GITHUB_CLIENT_SECRET
}

const GithubState=props=>{
    // global state
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }
    const [state,dispatch]=useReducer(GithubReducer,initialState)
    // search user
    const searchUsers=async text => {
        // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
        // axios.get('https://api.github.com/users').then(res=>console.log(res.data))
        setLoading()
        const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        // this.setState({users:res.data.items,loading:false}) 
        // setUsers(res.data.items)  
        console.log(1)  
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
      }
    // get user
    const getUser=async (username)=>{
        setLoading()
        const res=await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        // this.setState({user:res.data,loading:false,}) 
        // setUser(res.data)   
        dispatch({type:GET_USERS,payload:res.data})     
      }

    // get repos
    const getUserRepos=async (username)=>{
        setLoading()
        
        const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        // this.setState({repos:res.data,loading:false,}) 
        // setRepos(res.data)    
        // setLoading(false)
        dispatch({type:GET_REPOS,payload:res.data})     
      }

    // clear user
    const clearUsers= ()=> dispatch({type:CLEAR_USERS})

    // set loading
    const setLoading= ()=>dispatch({ type:SET_LOADING })

// we are wrapping full application with Provider,,value is a prop contains info available to entire app (all the methods/action and state)
    return <GithubContext.Provider value={{users:state.users,user:state.user,repos:state.repos,loading:state.loading,
        searchUsers,clearUsers,getUser,getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState