import Filme1 from '../img/filme1.jpg';
import Filme2 from '../img/filme2.png';
import Filme3 from '../img/filme3.jpg';
import Filme4 from '../img/divertidamente.jpg';
import Serie1 from '../img/got.jpg';
import Serie2 from '../img/lucifer.jpg';
import Serie3 from '../img/friends.jpg';
import Serie4 from '../img/hod.jpg';
import ItemFilme from './ItemFilme';
import CatalagoItens from './CatalagoItens';
import Header from './Header';
import { fetchTopFilmes, fetchTopSeries } from '../services/tmdbService';
import { useState, useEffect } from 'react';

const Home = () => {
    const [topFilmes, setTopFilmes] = useState([]);
    const [topSeries, setTopSeries] = useState([]);

    useEffect(() => {
      const fetchTitulos = async () => {
        try {
          const listaFilmes = await fetchTopFilmes();
          const listaSeries = await fetchTopSeries();
          setTopFilmes(listaFilmes);
          setTopSeries(listaSeries);
        } catch (error) {
          console.error('Erro ao buscar titulos: ', error);
        }
      }

      fetchTitulos();
    }, []);

      return (
        <>
          <Header/>
          <CatalagoItens 
            titulo="Filmes"
            catalagos={topFilmes}
            tituloMt={true}
          />
          <CatalagoItens 
            titulo="Series"
            catalagos={topSeries}
          />
        </>
      )
}

export default Home;