import { useEffect, useState } from "react";


function FetchApi() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((apiData) => { setData(apiData.message) });
  }, []);

  return (
    <>
    <div style={{ backgroundColor:'skyblue', color:'blue', textAlign: 'center', fontFamily:'cursive'}}><h1>Pictures of Dogs</h1></div>
    <img style={{  paddingTop: 20}} width={300} height={300} src={data} alt="default url"/>
    </>
  );
}

export default FetchApi;









// import React from "react"


// function FetchApi() {

//   const apiGet = () => {
//   fetch("https://api.github.com/users")
//   .then ((response) => response.json())
//   .then ((json) => console.log(json))
// }

// return(
//   <div>
//     <button style={{ backgroundColor:'skyblue', color:'blue',padding: 10, marginTop:'20%', border:'solid blue 2px'}} onClick={apiGet}> Fetch API</button>
//   </div>
// )
// }

// export default FetchApi;
