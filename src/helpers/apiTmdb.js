const API_KEY = '63d26ba416f359cdacc0fe472fb8e85a'

const API_BASE = 'https://api.themoviedb.org/3'

// Consultas que vão ser feitas a API:
/*
- originais da netflix 
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance 
- documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais', 
                title: 'Originais do Netflix', 
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'trending', 
                title: 'Recomendados para você', 
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'toprated', 
                title: 'Em Alta', 
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'action', 
                title: 'Ação', 
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'comedy', 
                title: 'Comédia', 
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'horror', 
                title: 'Terror', 
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'romance', 
                title: 'Romance', 
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'documentary', 
                title: 'Documentários', 
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }, 
            
        ]
    }
}