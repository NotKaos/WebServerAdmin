import React from "react";

class Login extends React.Component{
    render(){
        return (
            <main>

                <h1 className="center">Login below</h1>
                <h2 className="center">Haven't got an account? Register <a href="/Register"><em><u>here</u></em></a>
                    </h2>
                <div className="myContainer">
                    <form id='login' action="/Login" method="POST">
                        <h3>Account login</h3>
                            <p>Required information is marked with an asterisk (*)</p><br/>
                            <div className="signinfix">
                                <label htmlFor="username">Username*:</label>
                                <input type="text" className="input" name="username" id="username" required
                                       placeholder="Enter your Username"/>

                                    <label htmlFor="password">Password*</label>
                                    <input type="password" className="input" name="password" id="password" required
                                           placeholder="Enter your Password"/>
                            </div>

                            <input type="submit" className="button" value="Login"/>
                                <input type="reset" className="button" value="Reset Form"/><br/>

                                    <a className="hyperlink" href="/Register"> Don't have an account? Create an
                                        account here!</a>

                    <br/>
                        </form>
                    <br/>
                </div>
            </main>
        )
    }
}

export default Login;