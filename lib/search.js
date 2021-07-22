"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbuns = exports.search = void 0;

var _config = require("./config.js");

var _util = require("./util.js");

var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type)).then(_util.dataJSON);
};

exports.search = search;

var searchAlbuns = function searchAlbuns(query) {
  search(query, 'album');
};

exports.searchAlbuns = searchAlbuns;

var searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchTracks = function searchTracks(query, type) {
  search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(query, type) {
  search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;