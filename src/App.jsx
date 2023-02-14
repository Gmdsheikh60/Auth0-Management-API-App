import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./component/Users";
import Connections from  "./component/Connections";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const headerParameters = {
    Authorization: 'Bearer {{ACCESS_TOKEN}}',
    'content-type': 'application/json',
  };
  return (
    
    <div className="App">
     <style>{'body { backgroundColor: #FDEEDC; }'}</style>

      <Navbar />   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users headerParameters={headerParameters} />}>
        </Route>
        <Route path="/connections" element={<Connections headerParameters={headerParameters} />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
