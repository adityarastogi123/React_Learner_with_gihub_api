// import logo from './logo.svg';
import './App.css';
import React, { Fragment,useState} from 'react';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import home from './components/pages/home';
import NotFound from './components/pages/NotFound';
// import axios from 'axios'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import About from './components/pages/About'
import User from './components/users/User';
import GithubState from './contexr/github/GithubState';
import AlertState from './contexr/alert/AlertState';

const App=() => {
  // foo(){
  //   return 'adi'
  // }
  // cresting app level state->
  // const [loading,setLoading]=useState(false)
  // const [alert,setAlert]=useState(null)
  // const [user,setUser]=useState({})
  // const [repos,setRepos]=useState([])
  // state={
  //   users:[],
  //   loading:false,
  //   alert: null,
  //   user:{},
  //   repos:[]
  // }
  // this runs when components load
    // async componentDidMount(){
    //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    //   // axios.get('https://api.github.com/users').then(res=>console.log(res.data))
    //   this.setState({loading:true})
    //   const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //   this.setState({users:res.data,loading:false})
    // }
    // const serachUsers=async text => {
    //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    //   // axios.get('https://api.github.com/users').then(res=>console.log(res.data))
    //   setLoading(true)
    //   const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //   // this.setState({users:res.data.items,loading:false}) 
    //   setUsers(res.data.items)    
    //   setLoading(false)
    // }
    // const clearUsers=() => {
    //   setUsers([])    
    //   setLoading(false) 
    // }
    // const setAlerts=(msg,typ)=>{
    //   // this.setState({alert:{msg:msg,type:typ}}) 
    //   setAlert({msg:msg,type:typ})
    //   setTimeout(()=>{
    //     setAlert(null) 
    //   },5000)
    // }
  // const getUser=async (username)=>{
  //   setLoading(true)
  //   const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // this.setState({user:res.data,loading:false,}) 
  //   setUser(res.data)    
  //   setLoading(false)    
  // }
  // const getUserRepos=async (username)=>{
  //   setLoading(true)
    
  //   const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // this.setState({repos:res.data,loading:false,}) 
  //   setRepos(res.data)    
  //   setLoading(false)     
  // }

    // const name='aditya';
    // const load=true;
    // const names=true
    // if(load){
    //   return <div><h4>loading...</h4></div>
    // }
    //   return load ? <div><h4>loading...</h4></div>:<React.Fragment>
    //   <h1>Bello {name}</h1>
    // </React.Fragment>
    // const foo=()=>'adita';
    // function foo(){
    //   return 'adi'
    // }
    // const no=[1,2,3,4,5]
    // const {users,loading,alert,user,repos}=this.state
    // With JSX
    return(
      // <div className='xyz'>
      //   <h1>hello</h1>
      // </div>
      // now h1 will have no parent
      <GithubState>
        <AlertState>
      <Router>
      <React.Fragment>
         {/* <h1>Bello {names ? name : 'anonymous'}</h1> */}
        {/* <h1>hello {this.foo()}</h1> */}
        <Navbar />
        <div className='container'>
          <Alert/>
          <Switch>
            <Route exact path='/' 
        //     render={props=>(
        //       <Fragment>
        //   <Search />
        // <Users />
        //       </Fragment>
        //     )} 
        component={home}/>
            <Route
            exact path='/about' component={About}
            />
            {/* <Route 
            exact path='/user/:xyz' render={props=>(
              <User {...props} repos={repos}/>
            )}
            /> */}
            <Route
            exact path='/user/:xyz' component={User}
            />
            <Route component={NotFound} />
          </Switch>

        </div>
      </React.Fragment>
      </Router>
      </AlertState>
      </GithubState>
    );

    // Without JSX
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Bello'))
}

export default App;
