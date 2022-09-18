import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    let ob = {
      name: this.state.name,

      password: this.state.password,
    };
    let olddata = localStorage.getItem("userdata");

    if (olddata == null) {
      olddata = [];
      olddata.push(ob);
      localStorage.setItem("userdata", JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata);
      oldArr.push(ob);
      localStorage.setItem("userdata", JSON.stringify(oldArr));
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-login">
        <div className="form-login-line">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-input"
            value={this.state.name}
            onChange={this.onChangeName}
            required
          />
        </div>

        <div className="form-login-line">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            value={this.state.password}
            onChange={this.onChangePassword}
            required
          />
        </div>
        <div className="form-loginbutton-container">
          <button type="submit" className="form-loginbutton-button" onClick={this.props.onRegister}>
            Register
          </button>
        </div>
      </form>
    );
  }
}

export default Register;
