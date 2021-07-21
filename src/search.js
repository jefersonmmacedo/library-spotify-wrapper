import {API_URL} from './config.js'
import { dataJSON } from './util.js'

const search = (query, type) => {
    fetch(`${API_URL}/search?q=${query}&type=${type}`)
        .then(dataJSON)
}
const searchAlbuns = (query) => {
    search(query, 'album')
}
const searchArtists = (query) => {
    search(query, 'artist')
}
const searchTracks = (query, type) => {
    search(query, 'track')
}
const searchPlaylists = (query, type) => {
    search(query, 'playlist')
}

export {search, searchAlbuns, searchArtists, searchTracks, searchPlaylists}
