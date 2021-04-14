import React from 'react';
import './index.css';

class Premier extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
               <p id="colorize" > Hello World!! </p>
               <p data-lorem = "starta" > lorem ipsum {1+1 === 2 ? 'True' : 'False'} </p>
               <Login />
            </div>
        );
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <nav id="navigation">
                <li>
                    <ul>Home</ul>
                    <ul>Gallery</ul>
                    <ul>Contacts</ul>
                </li>
            </nav>
        );
    }
}
class Login extends React.Component{
    render(){
        return(
            <div id="login-box">
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit">Login</button>
            </div>
        )
    }
}

export default Premier;