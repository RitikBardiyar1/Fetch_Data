import { useEffect, useState } from "react";
import axios from "axios";

function AxiosGet() {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random")
      .then((resp) => {
        setData(resp.data.message);
      });
  }, []);

  return (
    <>
    <div style={{ backgroundColor:'lightcoral', color:'white', textAlign: 'center', fontFamily:'cursive'}}><h1>Pictures of Dogs</h1></div>
    <img style={{  paddingTop: 20}} width={300} height={300} src={data} />
    </>
  );
}

export default AxiosGet;