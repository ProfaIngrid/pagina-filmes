import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ExibeTitulo from './components/ExibeTitulo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/exibetitulo',
      element: <ExibeTitulo/>
    }
  ])


  return(
    // <Home/>
    // <ExibeTitulo/>
    <RouterProvider router={rotas}/>
  )
}

export default App
