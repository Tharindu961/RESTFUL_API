import React, { Component } from 'react'
import axios from 'axios'

  class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(this.state);
        const body = JSON.stringify(this.state);
        // const body = {
        //     "email" : "baigayal@gmail.com",
        //     "password" : "12345"};
            console.log(body)
        
        try {

                const res = await axios.post('http://localhost:5000/user/login', body, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                console.log(res.data.message) 
                this.props.history.push("/upload");

        } catch(err) {
            // if(err.response.status == 500) {
            //     console.log('There was a problem with the server');
            // }else {
            //     console.log(err.response.data.msg);
            // }
            console.log("wrong input");
            this.state.error = "fucked";
            console.log(this.state.error)
        }
        
    };
    
    render() {
        return (
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>  
                    <div>
                    {this.state.error}
                    </div>
                    

                    <div className="input-field">
                        <button onClick={this.handleSubmit} className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default SignIn;



