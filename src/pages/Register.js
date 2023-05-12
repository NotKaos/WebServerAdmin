import React from "react";

class Register extends React.Component{

    passwordStrength() {
        let password = document.getElementById("password").value; //retreives the password
        let strength_points=0

//below uses regex to scan the password input
        if(/[a-z]/.test(password) == true){// checks for lowercase letters
            strength_points += 1;
        }

        if(/[A-Z]/.test(password) == true){// checks for uppcase letters
            strength_points += 1;
        }

        if (/[0-9]/.test(password) == true) {//checks for numbers
            strength_points += 1;
        }

        if (/[$@#&!?%*()-+=/£]/.test(password) == true) {//checks for special characters
            strength_points += 1;
        }

//below displays the strength of the password depending on how many points it gained above
        if (strength_points === 0){
            document.getElementById('strength').innerHTML = 'Password is very weak'
            document.getElementById('strength').style.color = "red"
            document.getElementById('strengthDivBar').style.background = "red"
            document.getElementById('strengthDivBar').style.visibility = "visible"
            document.getElementById('strengthDivBar').style.width = "33%"

        }else if (strength_points == 1){
            document.getElementById('strength').innerHTML = 'Password is very weak'
            document.getElementById('strength').style.color = "red"
            document.getElementById('strengthDivBar').style.background = "red"
            document.getElementById('strengthDivBar').style.visibility = "visible"
            document.getElementById('strengthDivBar').style.width = "33%"

        }else if (strength_points == 2){
            document.getElementById('strength').innerHTML = 'Password is medium strength'
            document.getElementById('strength').style.color = "orange"
            document.getElementById('strengthDivBar').style.visibility = "visible"
            document.getElementById('strengthDivBar').style.background = "orange"
            document.getElementById('strengthDivBar').style.width = "66%"
        }else if (strength_points == 3){
            document.getElementById('strength').innerHTML = 'Password is strong'
            document.getElementById('strength').style.color = "green"
            document.getElementById('strengthDivBar').style.visibility = "visible"
            document.getElementById('strengthDivBar').style.background = "green"
            document.getElementById('strengthDivBar').style.width = "100%"

        }else if (strength_points == 4){
            document.getElementById('strength').innerHTML = 'Password is very strong'
            document.getElementById('strength').style.color = "green"
            document.getElementById('strengthDivBar').style.background = "green"
            document.getElementById('strengthDivBar').style.visibility = "visible"
            document.getElementById('strengthDivBar').style.width = "100%"

        }
    }
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
                                    <option disabled selected value>Select a department</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Biology">Biology</option>
                                    <option value="English">English</option>
                                    <option value="Philosophy">Philosophy</option>
                                </select><br/>

                                <label for="password">Password*:</label>
                                <input type="password" class="input" name ="password" id="password" onChange={this.passwordStrength} required placeholder="Create a password"/><br/>
                                    <div id="strengthDiv">
                                        <label id="strength"></label>
                                    </div><br/>
                                    <div id="strengthDivBar"/>
                                    <br/>
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