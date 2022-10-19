import React, { Component } from "react";

// class Student extends Component{
//         //state without constructor or state property
//         state = {
//             name : "Netra"
//         };
//         // event handler arrow function
//         handleClick = () => {
//             console.log("Button Click");
//        };
//        render() {
//         return(
//             <div>
//                 <h1>Hello , {this.state.name}</h1>
//                 <button onClick= {this.handleClick}> Click Me</button>
//             </div>
//         );
//        }
// }

// class Student extends Component{
//     //state without constructor or state property
//     state = {
//         id : 1,
//         name : "Netra"
//     };
//     // event handler  function
//     handleClick = (id) => {
//         console.log(id);
//    };
//     handleClickArg =() => {
//         this.handleClick(this.state.id)
//     }
//    render() {
//     return(
//         <div>
//             <h1>Hello , {this.state.name}</h1>
//             <button onClick= {this.handleClickArg}> Delete</button>
//         </div>
//     );
//    }
// }

//export default Student;

class Student extends Component{
    //state without constructor or state property
    state = {
        id : 1,
        name : "Netra"
    };
    //bind method 
    handleClick = (id,e) => {
        console.log(id);
        console.log(e);
   };
   
   render() {
    return(
        <div>
            <h1>Hello , {this.state.name}</h1>
            <button onClick= { this.handleClick.bind(this, this.state.id )}> Delete</button>
        </div>
    );
   }
}

export default Student;