import './App.css';
import FetchApi from "./Components/FetchApi";
import AxiosGet from './Components/AxiosGet';
import AxiosPost from "./Components/AxiosPost";
import AxiosPut from "./Components/AxiosPut";
import AxiosDelete from "./Components/AxiosDelete";


function App() {
  return (
    <div className='App'>
    <FetchApi/>  
    <AxiosGet/>
    <AxiosPost/>
    <AxiosPut/>
    <AxiosDelete/>
    </div>
  );
}

export default App;
