import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './Comp/Header';
import store from './Redux/Store';
import {Provider} from "react-redux";
import InsideDiv from './Comp/InsideDiv';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        {/* header */}
        <div style={{width:"72%",height:"65%",border:"1px solid white",marginTop:"5%",background:"white",borderRadius:"7px"}}>
          <InsideDiv />
        </div>
      </div>
    </Provider>
  );
}

export default App;
