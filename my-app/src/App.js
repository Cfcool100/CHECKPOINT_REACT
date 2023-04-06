import './App.css';

function App() {
  return (
    <div className="App">
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
        <p>Forgot <a href="1">password?</a></p>
      </div>
    </div>
  );
}

export default App;
