import React from 'react';
import axios from 'axios';
import './index.scss';

class Login extends React.Component {
  state = {
    inputLoginValue: '',
    inputPasswordValue: '',
    isUserConnected: false,
  };

  handleLogin = async e => {
    e.preventDefault();
    const serverResponse = await axios.get('https://wepop.talkspirit.com/');

    // Vérifie que tout s'est bien déroulé
    if (serverResponse.status === 200) {
      this.setState({
        isUserConnected: true,
      });
    }
  };

  handleLoginChange = e => {
    this.setState({
      inputLoginValue: e.target.value,
    });
  };

  handlePasswordChange = e => {
    this.setState({
      inputPasswordValue: e.target.value,
    });
  };

  render() {
    console.log('state is : ', this.state);
    if (this.state.isUserConnected) {
      return (
        <div className="main">
          <div className="home-content">
            <h1>Hello</h1>
            <p>Hello. User connected : {this.state.inputLoginValue}</p>
            <div className="form-content-button">
              <button onClick={() => this.setState({ isUserConnected: false })}>
                Back to login
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="main">
        <div className="form-content">
          <h1>Talk spirit App</h1>
          <h2>Login</h2>
          <form onSubmit={e => this.handleLogin(e)}>
            <div className="form-input">
              <input
                placeholder="Login"
                value={this.state.inputLoginValue}
                onChange={e => this.handleLoginChange(e)}
                required
              />
              <label>Login</label>
            </div>
            <div className="form-input">
              <input
                placeholder="Password"
                type="password"
                value={this.state.inputPasswordValue}
                onChange={e => this.handlePasswordChange(e)}
                required
              />
              <label>Password</label>
            </div>

            <div className="form-content-button">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
