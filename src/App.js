import React from 'react';
import Register from './components/register';
import logo from './2020.png';
import background from './background.jpeg';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2> The Roaring 20s </h2>
         <img src= {logo}/>
          <h6> New Year's Eve Gala! </h6>
         <div className="narrative">
              <p>
                Mirando hacia una nueva decada,
                terminemos el aNo 2019 de una nueva manera!

                AcompaNenos este 31 de Diciembre a despedir el 2019
                 con familia y amados!

                 Para reservar porfavor de reservar aqui:
              </p>
           </div>
          <div className="register">
           <Register />
           </div>
      </div>
    </div>
  );
}

export default App;
