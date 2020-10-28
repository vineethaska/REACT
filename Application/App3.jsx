import React from "react"
import PropsTypes from 'prop-types'
function App3(){
    return <Greeting name="Aska Vineeth" age={20} occupation="Student"/>
}


function Greeting(props){
    return(
        <p>
            Hello I'm {props.name}, a {props.age} years old {props.occupation}
        </p>
    )
}

Greeting.defaultProps={
    name:"Vineeth"
}

Greeting.prototype={
    name: PropsTypes.string.isRequired,
    age:PropsTypes.number.isRequired,
    occupation:PropsTypes.string.isRequired
}



 export default App3;


/*import React from "react"
class App3 extends React.Component{
    render(){
        return(
            <div> 
              promts example
            </div>
        );
    }
}

export default App3;*/