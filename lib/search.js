'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbuns = exports.search = undefined;

var _config = require('./config');

var _util = require('./util');

var search = function search(query, type) {
    fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_util.dataJSON);
};
var searchAlbuns = function searchAlbuns(query) {
    search(query, 'album');
};
var searchArtists = function searchArtists(query) {
    search(query, 'artist');
};
var searchTracks = function searchTracks(query, type) {
    search(query, 'track');
};
var searchPlaylists = function searchPlaylists(query, type) {
    search(query, 'playlist');
};

exports.search = search;
exports.searchAlbuns = searchAlbuns;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;