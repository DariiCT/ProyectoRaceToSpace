import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import FormularioPage from './pages/FormularioPage';




const App = () => {
    return(

  
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AdminPage/>}></Route>
            <Route path='/Formulario' element={<FormularioPage/>}></Route>
        </Routes>
        </BrowserRouter>
        
        
    )

}

export default App;