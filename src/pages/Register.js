import React from "react";

class Register extends React.Component{
    render(){
        return (
            <main>
                <h1 class="center">Haven't got an account yet?</h1>
                <h2 class="center">Register below!</h2>

                <div class="myContainer">

                    <form id ='login' action="/Register" method="POST">

                        <h3>Account register</h3>
                        <p>Required information is marked with an asterisk (*)</p><br/>
                        <div class="signinfix">
                            <label for="email">Email address*:</label>
                            <input type="email" class="input" name ="email" id="email" placeholder="Enter your email"/><br/>

                            <label for="username">Username*:</label>
                            <input type="text" className="input" name="username" id="username"
                                   placeholder="Enter a username"/><br/>

                                <label for="department">Department: </label>
                                <select id="department" class="input" name="department">
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Biology">Biology</option>
                                    <option value="English">English</option>
                                    <option value="Philosophy">Philosophy</option>
                                </select><br/>

                                <label for="password">Password*:</label>
                                <input type="password" class="input" name ="password" id="password" oninput="passwordStrength()" required placeholder="Create a password"/><br/>
                                    <div id="strengthDiv">
                                        <label id="strength"></label>
                                    </div><br/>
                                    <div id="strengthDivBar">
                                    </div><br/>
                        </div>

                        <input type="submit" class="button" value="Register"/>
                            <input type="reset" class= "button" value="Reset Form"/><br/><br/>

                                <a class="hyperlink" href="/Login"> Already have an account? Login here!</a><br/>
                    </form><br/>

                </div>
            </main>
        )
    }
}

export default Register;