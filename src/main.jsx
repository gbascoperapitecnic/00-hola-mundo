// importar  react
import React from "react";
// permite renderizar componentes de react al DOM
import ReactDOM from 'react-dom/client'

import { App } from "./App";
import './index.css';
import { TwitterFollowCard } from "./components/TwitterFollowCard";

// crea el elemento root 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // renderizamos el componente y le pasamos sus parametros
  /*
    Se puede usar <>
                  </>
    En vez de <React.Fragment>

  */
  <App/>
)
