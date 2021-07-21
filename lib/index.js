'use strict';

var _search = require('./search');

var _album = require('./album');

module.exports = { search: _search.search, searchAlbuns: _search.searchAlbuns, searchArtists: _search.searchArtists, searchTracks: _search.searchTracks, searchPlaylists: _search.searchPlaylists, getAlbum: _album.getAlbum, getAlbums: _album.getAlbums, getAlbumTracks: _album.getAlbumTracks };