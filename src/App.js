import React, { useContext } from 'react';
import './App.css';
import PrivateRoutes from './components/routes/private.routes';
import PublicRoutes from './components/routes/public.routes';
import { Context } from './components/context/AuthContext';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const {auth} = useContext(Context);


  return (
    <div className="App">
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  );
}

export default App;
