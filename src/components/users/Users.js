import React, { Component,useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import GithubContext from '../../contexr/github/GithubContext';

const Users=()=> {
    const githubContext=useContext(GithubContext)
    // component level state
    // state={
    //     users:[
    //         {
    //             id:'1',
    //             login: 'mojombo',
    //             avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //             html_url: "https://github.com/mojombo"
    //           },
    //           {
    //             id:'2',
    //             login: "defunkt",
    //             avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    //             html_url: "https://github.com/defunkt"
    //           },
    //           {
    //             id:'3',
    //             login: "pjhyett",
    //             avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    //             html_url: "https://github.com/pjhyett"
    //           }
    //     ]
    // };
    const {loading,users}=githubContext
    if(loading){
        return <Spinner />
    } else{
        return (
            // creating list of user in react by looping though above state
            <div style={userStyle}>
                {users.map((user)=>{
                    return <UserItem key={user.id} user={user}/>
                })}
            </div>
        )
    }

}
Users.propTypes={
    // users:PropTypes.array.isRequired,
    // loading:PropTypes.bool.isRequired
}

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users
