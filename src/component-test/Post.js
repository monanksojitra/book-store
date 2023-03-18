import axios from 'axios'
import React, { Component } from 'react'

export class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changefun = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitfun=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response => {console.log(Response) })
        .catch(erre => { console.log(erre) })
    }
    
  render() {
    const { userId , title , body } = this.state
    return (
      <div>
        <form onSubmit={this.submitfun}>
            <div>
                <p> user id
                    <input type='text' name='userId' value={userId} onChange={this.changefun}></input>
                </p>
            </div>
            <div>
                <p> title
                    <input type='text' name='title' value={title} onChange={this.changefun}></input>
                </p>
            </div>
            <div>
                <p> body
                    <input type='text' name='body' value={body} onChange={this.changefun}></input>
                </p>
            </div>
        <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default Post
