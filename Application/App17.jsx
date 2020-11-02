import React from 'react'
class App17 extends React.Component {
    constructor(props) {
      super(props);
  
    this.name = React.createRef();
      this.username = React.createRef();
      this.password = React.createRef();
      this.mobile = React.createRef();
      this.email = React.createRef();
      this.state = {
        errors: []
      };
    }
  
    handleSubmit(event) {
        const name =this.name.current.value;
      const username = this.username.current.value;
      const password = this.password.current.value;
      const email =this.email.current.value;
      const mobile =this.mobile.current.value;


      const errors = this.handleValidation(name, username, password, email, mobile);
  
      if (errors.length >= 0) {
        this.setState({ errors });
        return;
      }
      
    };
  
    handleValidation  (name, username, password, email, mobile)  {
      const errors = [];
      if (name.length === 0) {
          errors.push("name cannot be empty");
      }
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      }
      if (mobile.length === 0) {
        errors.push("mobile cannot be empty");
      }
      if (email.length === 0) { 
        errors.push("email cannot be empty");
      }
      
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
        <div>
          <h1>React Ref Example</h1>
            {errors.map(error => <p key={error}>{error}</p>)}
            
            <div>
              <label>Name:</label>
              <input type="text" ref={this.name} />
            </div>
            <div>
              <label>Username:</label>
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" ref={this.password} />
            </div>
            <div>
              <label>Mobile:</label>
              <input type="text" ref={this.mobile} />
            </div>
            <div>
              <label>email:</label>
              <input type="text" ref={this.email} />
            </div>

            <div>
              <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
          
        </div>
      );
    }
  }
  export default App17;