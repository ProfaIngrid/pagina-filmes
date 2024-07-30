import axios from 'axios';

const apiKey = '9f9114143112e7d28039ff7a609cb00c';

export const fetchTopFilmes = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
        // return response.data.results;
        const dadosFilme = response.data.results;

        const dadosFilmeTrad = dadosFilme.map(({ id, title, poster_path, overview }) => ({ 
            id : id,
            nome: title,
            imagem: 'https://image.tmdb.org/t/p/original/'+poster_path,
            sinopse: overview
        }));
        
        return dadosFilmeTrad;
        
    } catch (error) {
        console.error("Erro ao buscar top filmes");
        return [];
    }
};

export const fetchTopSeries = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&language=pt-BR`);
        // return response.data.results;
        const dadosFilme = response.data.results;

        const dadosFilmeTrad = dadosFilme.map(({ id, title, poster_path, overview }) => ({ 
            id : id,
            nome: name,
            imagem: 'https://image.tmdb.org/t/p/original/'+poster_path,
            sinopse: overview
        }));
        
        return dadosFilmeTrad;
        
    } catch (error) {
        console.error("Erro ao buscar top series");
        return [];
    }
};
