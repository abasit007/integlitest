import React from "react"
import PropTypes from "prop-types"
class Signin extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="row">
          <form action={this.props.url} method="post">
            <div className="form-group">
              <label>User Name</label>
              <input type="text" name="username" id="username" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" id="password" className="form-control" />
            </div>
            <div className="form-group">
            <input type="submit" name="commit" value="Login" data-disable-with="Login" className="btn btn-secondary"/>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin
