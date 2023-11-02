const baseURL = 'https://rickandmortyapi.com/api'

const episode = '/episode'

const character = '/character'

const urls = {
    episode:{
        base: episode,
    },
    character:{
        base: character,
        byId: (id) => `${episode}/${id}`,
    }

}

export {
    baseURL,
    urls
}