import React from "react";

class Home extends React.Component{
    render(){
        return (
          
          <div class="backgroundHome">

        <h1 class="center">Login below</h1>
        <h2 class="center">Haven't got an account? Register <a href="register.html"><em><u>here</u></em></a></h2>
        
        <div class="myContainer">
        <form id ='login' action="./login.html" method="POST">
        <h3>Account login</h3>
        <p>Required information is marked with an asterisk (*)</p><br/>
        <div class="signinfix">
          <label for="username">Username*:</label>
          <input type="text" class="input" name ="username" id="username" required placeholder="Enter your Username"></input><br/>
          <label for= "password">Password*</label>
          <input type="password" class="input" name ="password" id="password" required placeholder="Enter your Password"></input><br/>
          <input type="submit" class="button" value="Login"></input>
          <input type="reset" class= "button" value="Reset Form"></input><br/><br/>
        
          <a class="hyperlink" href="register.html"> Don't have an account? Create an account here!</a><br/>

      </div>
        </form><br />

        </div>
          </div>
          
     
          
        )
    }
}

export default Home;