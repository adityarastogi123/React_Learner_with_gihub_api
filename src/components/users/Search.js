import React, { Component,useState,useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../contexr/github/GithubContext'
import GithubState from '../../contexr/github/GithubState'
import AlertContext from '../../contexr/alert/AlertContext'

const Search=()=> {
    const githubContext=useContext(GithubContext)
    const alertContext=useContext(AlertContext)
    const [text, setText]=useState('')
    // this function will be called everytime something will get typed in input form
    const onChange=(e)=>{
        // this.setState({text:e.target.value})
        // when we have more input fields
        // this.setState({[e.target.name]:e.target.value})
        setText(e.target.value);
        // console.log(1)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            alertContext.setAlert('Enter Something','light')
        }else{
            githubContext.searchUsers(text)
            setText('')
        }
    }
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" placeholder="Search Users" value={text}
                    onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {githubContext.users.length>0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
            </div>
        )
}
Search.propTypes={
    // searchUsers:PropTypes.func.isRequired,
    // clearUsers:PropTypes.func.isRequired,
    // showClear:PropTypes.bool.isRequired,
    // setAlerts:PropTypes.func.isRequired
}

export default Search
