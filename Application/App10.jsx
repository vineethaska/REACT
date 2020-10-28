import React from 'react'
import axios from 'Axios'
class App10 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            records:[]
        }
    }
    componentDidMount(){
        const apiurl='http://jsonplaceholder.typicode.com/users/';
        // fetch(apiurl)
        // .then((response)=> response.json())
        // .then((data)=>console.log("RECORDS are  ",data))

        // axios.get(apiurl)
        // .then((response)=>{
        //     //console.log(response.data)
        //     this.setState({
        //         records:response.data
        //     })
        //     console.log(this.state.records)
        // })
        // .catch(error=>{
        //     console.log("ERROR")
        // })

        const urlone=axios.get('http://jsonplaceholder.typicode.com/users/')
        const urlsecond=axios.get('https://api.github.com/users/hacktivist123/repos')
        const urlthird=axios.get('http://localhost:4000/')

        axios.all([urlone,urlsecond,urlthird]).then(axios.spread((...responses)=>{
            console.log("First ",responses[0].data)
            console.log("Second ",responses[1].data)
            console.log("third",responses[2].data)

        }))


    }
    render(){
        return(
            <ul>
                {this.state.records.map(rec=><li>{rec.name}</li>)}
            </ul>
        )
    }
}

export default App10;


/*import React from 'react';

class App10 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"aska"
        }

        this.change=this.onClick.bind(this);

    }

    componentDidMount(){
        
        console.log("Values from  "+this.state.name);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("values updated from "+this.state.name+" to "+prevState.name);
    }

    onClick(){
        var name=document.getElementById("name").value;
        this.setState({name});
    }
    render(){
        return( 
            <div>
                <input type="text" id="name"/><br></br>
                <button onClick ={this.change}>Click me</button>
            </div>  
        );
    }

}

export default App10; */

