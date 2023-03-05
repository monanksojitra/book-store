import axios from 'axios'
import React, { Component } from 'react'
import UserDetail from './UserDetail'

class Users  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(Response => {this.setState({list:Response.data}) })
            .catch(erre => { console.log(erre) })
    }
    render() {
        const { list } = this.state
        console.log(list)
        return (
            <div>
              {list?list.map(list => (
          <UserDetail main={list} key={list.id + list.name} />
        )):null}
            </div>
        )
    }
}

export default Users 
