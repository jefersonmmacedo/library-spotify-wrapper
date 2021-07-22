import {API_URL} from './config.js'
import { dataJSON } from './util.js'

const getAlbum = (id) => {
    return fetch(`${API_URL}/albuns/${id}`)
        .then(dataJSON)
}

const getAlbums = (ids) => {
    return fetch(`${API_URL}/albuns/?ids=${ids}`)
        .then(dataJSON)
}

const getAlbumTracks = (id) => {
    return fetch(`${API_URL}/albuns/${id}/tracks`)
        .then(dataJSON)
}

export {getAlbum, getAlbums, getAlbumTracks}
