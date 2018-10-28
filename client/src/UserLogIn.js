import React, {useState, useEffect} from 'react';

const NOT_ASKED = 0;
const LOADING = 1;
const COMPLETE = 2;
const FAILED = 3;

export default function() {
  const [state, setState] = useState({
    fetchState: NOT_ASKED,
    data: {},
    error: '',
  });

  const handleSubmitUserLoginForm = (email, password) => {
    setState({
      ...state,
      fetchState: LOADING,
    });

    fetch('http://localhost:4000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(r => r.json())
      .then(r =>
        setState({
          fetchState: COMPLETE,
          data: r,
          error: '',
        }),
      )
      .catch(e =>
        setState({
          fetchState: FAILED,
          data: {},
          error: e.getMessage(),
        }),
      );
  };

  return <UserLoginPage />;
}

function UserLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = `Log in`;
  });

  const handleInputChange = fn => ({target: {value}}) => fn(value);

  return (
    <div className="pa3 ph5-ns  mw9 center">
      <h1>User log in</h1>
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent   w-100"
                type="email"
                name="email-address"
                id="email-address"
                value={email}
                onChange={handleInputChange(setEmail)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent   w-100"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange(setPassword)}
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" />
              Remember me
            </label>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">
              Sign up
            </a>
            <a href="#0" className="f6 link dim black db">
              Forgot your password?
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
