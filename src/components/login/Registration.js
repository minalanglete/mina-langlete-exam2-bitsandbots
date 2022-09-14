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
    console.log(olddata);

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
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onChangeName}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={this.onChangePassword}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onRegister}>
          Register
        </button>
      </form>
    );
  }
}

export default Register;
