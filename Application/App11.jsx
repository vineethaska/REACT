import React,{Component} from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import './file.css'
import htmlContent from './Contact.html';
import './style.scss';
const myconf = require('./myConfig.json5');
import {stockData} from './data.js';
class App11 extends Component {
    constructor(props){
        super(props)
        console.log("myConfig",myconf.default.env)
    }
    render() {
      return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav>
            <ul >
              <li><Link to={'/'} > Home </Link></li>
              <li><Link to={'/about'} >About</Link></li>
              <li><Link to={'/contact'} >Contact</Link></li>
              <li><Link to={'/signin'} >Sign In</Link></li>
              <li><Link to={'/signup'} >Sign Up</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  


class Home extends Component {
        render() {
          return (
              <div>
                <h2>Home</h2>
              </div>
          );
        }
      }
    

    
    class About extends Component {
            render() {
              return (
                          <div>
                               {stockData.map((data,key)=>{
                                    return(<div key={key}>
                                            {data.company} +" "+{data.stockPrice}+" "+{data.stockPrice}
                                </div>)
                                })}
                            </div>
                      );
                      }
          }
        

        class Contact extends Component {
                render() {
                  return (
                      <div>
                        <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
                      </div>
                  );
                }
              }
            
            


            class SignIn extends Component {
                    render() {
                      return (
                          <div>
                            <table border='5px'>
                            <tr>
                                <td> Enter your id </td>
                                <td> <input type="text"></input></td>
                            </tr>
                            <tr>
                                <td> Enter your Password </td>
                                <td> <input type="password"></input></td>
                            </tr>   

                            <tr>
                                <td><input type="submit"></input></td>
                            </tr>


                            </table>    
                          </div>
                      );
                    }
                  }
                
                


                class SignUp extends Component {
                        render() {
                          return (
                              <div>
                                <h2>SignUp</h2>
                              </div>
                          );
                        }
                      }
                    
                    


export default App11;


