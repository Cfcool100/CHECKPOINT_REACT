import React, { useState } from 'react';
import './App.css';

function App() {

  const [check, setCheck] = useState({
      malt: false
    }
  );

  const SignIn = (check) => {
    check.preventDefault();
    setCheck({malt : !check.malt});
  }
  const SignUp = (check) => {
    check.preventDefault();
    setCheck({malt : check.malt});
  }

  return (
    <div className="App">
      {check.malt ? (
      <div className= "c">
        <form>
          <h3>Sign up</h3>
          <label>
            firstName <br/>
            <input type="text" placeholder="First name" className="f-name" />
          </label><br/>
          <label>
            lastName <br/>
            <input type="text" placeholder="Last name" className="l-name" />
          </label><br/>
          <label>
            UserName <br/>
            <input type="text" placeholder="Enter a username" className="u-name" />
          </label><br/>
          <label>
            Email address <br/>
            <input type="email" placeholder="Enter email" className="mail" />
          </label><br/>
          <label className="mdp">
            Password<br/>
            <input type="password" placeholder="Enter password" className="pwd" />
          </label><br/>
          <label className="mdp">
            Comfirm your Password<br/>
            <input type="password" placeholder="Enter again password" className="pwd" />
          </label><br/>
          <input type="submit" value="Submit" className="submit" />
        </form>
        <p class="">Have you an account? <a href="/signUp" onClick={SignUp}>Sign Up</a></p>
      </div>
      ) : 
        <div className= "c">
        <form>
          <h3>Sign In</h3>
          <label>
            Email address <br/>
            <input type="email" placeholder="Enter email" className="mail" />
          </label><br/>
          <label className="mdp">
            Password<br/>
            <input type="password" placeholder="Enter password" className="pwd" />
          </label><br/>
          <input type="submit" value="Submit" className="submit" />
        </form>
        <p class="">Forgot <a href="/connexion" onClick={SignIn}>password?</a></p>
      </div>
      }
    </div>
  );
}

export default App;
