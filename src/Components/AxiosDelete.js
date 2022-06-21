import axios from "axios";

function Axios() {

  const apiGet = () => {

    axios.delete("https://jsonplaceholder.typicode.com/users/5")
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