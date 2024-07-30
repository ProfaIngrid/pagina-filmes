// Aqui estamos importando o 'axios', que é uma ferramenta que ajuda a fazer pedidos para sites
import axios from 'axios';

// Este é o código secreto que usamos para falar com o site que tem as informações dos filmes
const apiKey = '9f9114143112e7d28039ff7a609cb00c';

export const fetchTrailer = async (id, tipo) => {
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/${tipo}/${id}/videos?api_key=${apiKey}&language=pt-BR`);
        const trailer = response.data.results[0].key;
        return trailer
    }catch(error){
        console.error("Erro ao buscar trailer", error);
        return null;
    }
}

// Função para buscar os filmes mais populares da semana
export const fetchTopFilmes = async () => {
    try {
        // Aqui pedimos para o site com a nossa chave secreta quais são os filmes mais populares dessa semana
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
        
        // Pegamos os filmes da resposta que o site nos deu
        const dadosFilme = response.data.results;

        // Agora vamos transformar os dados dos filmes em um formato que queremos
        const dadosFilmeTrad = await Promise.all(dadosFilme.map(async ({ id, title, poster_path, overview }) => { 
            const trailerKey = await fetchTrailer(id, 'movie'); 
            return{
                id : id, // O ID do filme
                nome: title, // O nome do filme
                imagem: 'https://image.tmdb.org/t/p/original/'+poster_path, // A imagem do filme, que é um link
                sinopse: overview, // A descrição do filme
                trailer: trailerKey
            }
        }));
        
        // Retornamos os filmes transformados
        return dadosFilmeTrad;
        
    } catch (error) {
        // Se der algum problema, mostramos uma mensagem de erro no console e retornamos uma lista vazia
        console.error("Erro ao buscar top filmes");
        return [];
    }
};

// Função para buscar as séries mais populares da semana
export const fetchTopSeries = async () => {
    try {
        // Aqui pedimos para o site com a nossa chave secreta quais são as séries mais populares dessa semana
        const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&language=pt-BR`);
        
        // Pegamos as séries da resposta que o site nos deu
        const dadosFilme = response.data.results;

        // Agora vamos transformar os dados dos filmes em um formato que queremos
        const dadosFilmeTrad = await Promise.all(dadosFilme.map(async ({ id, name, poster_path, overview }) => { 
            const trailerKey = await fetchTrailer(id, 'tv'); 
            return{
                id : id, // O ID do filme
                nome: name, // O nome do filme
                imagem: 'https://image.tmdb.org/t/p/original/'+poster_path, // A imagem do filme, que é um link
                sinopse: overview, // A descrição do filme
                trailer: trailerKey
            }
        }));
        
        // Retornamos os filmes transformados
        return dadosFilmeTrad;
        
    } catch (error) {
        // Se der algum problema, mostramos uma mensagem de erro no console e retornamos uma lista vazia
        console.error("Erro ao buscar top series");
        return [];
    }
};

// Função para buscar tanto filmes quanto séries e juntar os dois
export const fetchTopTitulos = async () => {
    try {
        // Aqui estamos pedindo ao site para nos dar os filmes e as séries mais populares ao mesmo tempo
        const [filmes, series] = await Promise.all([fetchTopFilmes(), fetchTopSeries()]);

        // Juntamos os filmes e as séries em uma única lista
        const topTitulos = [...filmes, ...series];

        // Retornamos a lista com filmes e séries
        return topTitulos;
    } catch (error) {
        // Se der algum problema, mostramos uma mensagem de erro no console e retornamos uma lista vazia
        console.error("Erro ao buscar top títulos:", error);
        return [];
    }
};
