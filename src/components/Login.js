import React from 'react'

const login = () => {
  return (
    <div className='login'>
    <div className="App">
      <header className="App-header" >
        <h1>FORM FRIENDLY !!</h1>
      </header>
      <div>
        <body>
          <form action="action.php">
          <h1>Login</h1>
          <hr/>
          
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Your Username" name="username" required />
          <br/>

          <label for="pwd"><b>Password</b></label>
          <input type="password" placeholder="Enter Your Password" name="psw" required /><br/>
    
          <button type="submit" class="loginbutton">Sign in</button>
        
          <p>New to form friend? <a href="#">Register</a></p>
        
          </form>
        </body>
      </div>
    </div>
    </div>
  )
}

export default login