import React, { Component } from 'react';

class UserList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
      
          {this.props.data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        
      </table>
    );
  }
}

export default UserList;
