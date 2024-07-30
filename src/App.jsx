import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ExibeTitulo from './components/ExibeTitulo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchTopTitulos } from './services/tmdbService';
import { useState, useEffect } from 'react';

import Filme1 from './img/filme1.jpg';
import Filme2 from './img/filme2.png';
import Filme3 from './img/filme3.jpg';
import Filme4 from './img/divertidamente.jpg';
import Serie1 from './img/got.jpg';
import Serie2 from './img/lucifer.jpg';
import Serie3 from './img/friends.jpg';
import Serie4 from './img/hod.jpg';

function App() {
  const [catalagoTitulos, setCatalagoTitulos] = useState([]);

  useEffect(() => {
    const fetchTitulos = async () => {
      try{
        const dados = await fetchTopTitulos();
        setCatalagoTitulos(dados);
      } catch (error){
        console.error("Erro ao buscar titulos: ", error);
      }
    }
    fetchTitulos();
  }, []);

  const catalagoFilmes = [
    { nome: 'Abigail', imagem: Filme1 },
    { nome: 'Rivais', imagem: Filme2 },
    { nome: 'Guerra Civil', imagem: Filme3 },
    { nome: 'Divertida Mente 2', imagem: Filme4 },
    { nome: 'Game of Thrones', imagem: Serie1 },
    { nome: 'Lucifer', imagem: Serie2 },
    { nome: 'Friends', imagem: Serie3 },
    { nome: 'House of the Dragon', imagem: Serie4 }
  ];

  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/exibetitulo/:nome',
      element: <ExibeTitulo catalago={catalagoTitulos}/>
    }
  ])


  return(
    // <Home/>
    // <ExibeTitulo/>
    <RouterProvider router={rotas}/>
  )
}

export default App
