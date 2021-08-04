import React, { Component } from 'react'
import {Link} from 'react-router-dom' 

 class UserItem extends Component {
// This state is containe by this component only
  // adding state
//   constructor(){
//     super()
//     this.state={
//       id:'id',
//       login:'mojombo',
//       avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
//       html_url:"https://github.com/mojombo"
//     }
//   }
// state={
//     id:'id',
//     login:'mojombo',
//     avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
//     html_url:"https://github.com/mojombo"
//   }
    render() {
        // destructuring
        // const {login,avatar_url,html_url}=this.state
        const {login,avatar_url,html_url}=this.props.user
        return (
            <div className='card text-center'>
                <img src={avatar_url} className='round-img' style={{width:'60px'}} />
                <h3>{login}</h3>
                <div>
                    <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`} >More</Link>
                </div>
            </div>
        )
    }
}

export default UserItem
