import axios from "axios";

function Axios() {

  const apiGet = () => {

    axios.post("https://jsonplaceholder.typicode.com/users", { 
        name:"Ritik", 
        email:"ritik@gmail.com", 
        phone:"98971" 
    })
      .then((resp) => {
        console.log(resp);
      });
    }

  return (
    <>
    <button style={{ backgroundColor:'skyblue', color:'blue',padding: 10, marginTop:'20%', border:'solid blue 2px'}} onClick={apiGet}> Call API</button>
    </>
  );
}

export default Axios;







// import React from 'react';
// import axios from 'axios';

// export default class PersonAdd extends React.Component {
//   state = {
//     name: ''
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }