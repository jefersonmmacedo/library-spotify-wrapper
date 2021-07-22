"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config.js");

var _util = require("./util.js");

var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config.API_URL, "/albuns/").concat(id)).then(_util.dataJSON);
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(ids) {
  return fetch("".concat(_config.API_URL, "/albuns/?ids=").concat(ids)).then(_util.dataJSON);
};

exports.getAlbums = getAlbums;

var getAlbumTracks = function getAlbumTracks(id) {
  return fetch("".concat(_config.API_URL, "/albuns/").concat(id, "/tracks")).then(_util.dataJSON);
};

exports.getAlbumTracks = getAlbumTracks;