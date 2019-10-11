import React from 'react';
//import {Link,Redirect} from 'react-router-dom';
import './DashBoard.css';
//import {withRouter} from 'react-router-dom';
class DashBoard extends React.Component{


constructor(props){
    super(props);
    this.state={
        user:[{
            "id":1,
            "name":"test1",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
            },
            {
            "id" : 2,
            "name":"test2",
            "age" : "12",
            "gender":"male",
            "email" : "test2@gmail.com",
            "phoneNo" : "9415346314"
            },
            {
            "id":3,
            "name":"test3",
            
            "age" : "13",
            "gender":"male",
            "email" : "test3@gmail.com",
            "phoneNo" : "9415346315"
            },
            {
            "id":4,
            "name":"test4",
            "age" : "14",
            "gender":"male",
            "email" : "test4@gmail.com",
            "phoneNo" : "9415346316"
            },
            {
            "id":5,
            "name":"test5",
            "age" : "15",
            "gender":"male",
            "email" : "test5@gmail.com",
            "phoneNo" : "9415346317"
            },
            {
            "id":6,
            "name":"test6",
            "age" : "16",
            "gender":"male",
            "email" : "test6@gmail.com",
            "phoneNo" : "9415346318"
            }
            ]
            
    }
}


componentDidMount(){
    console.log(this.state);
}


renderTableHeader() {
    let header = Object.keys(this.state.user[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 renderTableData() {
    return this.state.user.map((user, index) => {
       const { id, name, age,gender, email,phoneNo } = user //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{gender}</td>
             <td>{email}</td>
             <td>{phoneNo}</td>
             
          </tr>
       )
    })
 }

render(){
    return(

        <div>
        <h1 id='title'> Employee Table</h1>
        
                  
               
        <table id='students'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
    )
}
}
export default DashBoard;