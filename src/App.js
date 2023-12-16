import React, { useContext } from 'react';
import './App.css';
import PrivateRoutes from './components/routes/PrivateRoutes';
import PublicRoutes from './components/routes/PublicRoutes';
import { Context } from './components/context/AuthContext';


function App() {
  const {auth} = useContext(Context);


  return (
    <div className="App">
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  );
}

export default App;
