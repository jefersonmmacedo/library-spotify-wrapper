'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _util = require('./util');

var getAlbum = function getAlbum(id) {
    fetch(_config.API_URL + '/albuns/' + id).then(_util.dataJSON);
};

var getAlbums = function getAlbums(ids) {
    fetch(_config.API_URL + '/albuns/?ids=' + ids).then(_util.dataJSON);
};

var getAlbumTracks = function getAlbumTracks(id) {
    fetch(_config.API_URL + '/albuns/' + id + '/tracks').then(_util.dataJSON);
};

exports.getAlbum = getAlbum;
exports.getAlbums = getAlbums;
exports.getAlbumTracks = getAlbumTracks;