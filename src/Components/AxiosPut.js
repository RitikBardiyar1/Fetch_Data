import axios from "axios";

function Axios() {

  const apiGet = () => {

    axios.put("https://jsonplaceholder.typicode.com/users/1", { 
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