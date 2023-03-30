import React from 'react'

const Register = () => {
  return (
    <div className='register'>
    <div className="App">
      <header className="App-header" >
        <h1>FORM FRIENDLY !!</h1>
      </header>
      <div>
        <body>
          <form action="action.php">
          <h1>Register</h1>
          <hr/>
        
          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter Your Name" name="name" required />
          <br/>
        
          <label for="email"><b>Email</b></label> 
          <input type="text" placeholder="Enter Your E-mail" name="email" required /><br/>
    
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />
          <br/>

          <label for="pwd"><b>Password</b></label>
          <input type="password" placeholder="Enter Your Password" name="psw" required /><br/>
    
          <label for="psw-repeat"><b>Re-enter Password</b></label>
          <input type="password" placeholder="Re-enter Your Password" name="psw-repeat" required /><br/>
          <hr/>
    
          <button type="submit" class="registerbutton">Register</button>
        
          <p>Already have an account? <a href="\Login.js">Sign in</a>.</p>
        
          </form>
        </body>
      </div>
    </div>
    </div>
  )
}

export default Register