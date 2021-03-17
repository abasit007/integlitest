import React from "react"
import PropTypes from "prop-types"
class Signup extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="row">
          <form action={this.props.url} method="post">
            <div className="form-group">
              <label>User Name</label>
              <input type="text" name="user[username]" id="user_username" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="user[password]" id="user_password" className="form-control" />
            </div>
            <div className="form-group">
            <input type="submit" name="commit" value="Create User" data-disable-with="Create User" className="btn btn-secondary"/>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup
