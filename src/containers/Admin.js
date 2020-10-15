import React from 'react';
import NewCategory from "../components/NewCategory";

export default class Admin extends React.Component {

  render() {

    return (
      <div className="admin">
        <h1>Admin</h1>
        <NewCategory/>
      </div>

    )
  }
}
