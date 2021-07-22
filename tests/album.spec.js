import chai, { expect } from "chai";
import sinon from 'sinon';
import sinonChai from "sinon-chai";

import {getAlbum, getAlbums, getAlbumTracks} from '../src/album.js'

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Albums Spotify Wrapper', () => {
    let  stubedFetch;
    let promise;

    beforeEach( () => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise =  stubedFetch.resolves({ json: () => ({ album: 'name'}) });
    });

    afterEach( () => {
        stubedFetch.restore();
    });



    // Inicio Smoke tests
    describe('Smoke Tests', () => {
        it('Should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });

        it('Should have getAlbums method', () => {
            expect(getAlbums).to.exist;
        });

        it('Should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });
    });
    // Fim Smoke tests

    // Inicio GetAlbum
    describe('getAlbum', () => {
        // erifica se o Fetch ocorre
        it('Should call fetch method', () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        // Verifica se o Fetch ocorre com a URL desejada
        it('Should call fetch with the correct URL', () => {
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albuns/4aawyAB9vmqN3uQ7FjRGTy');

            const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTJ');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albuns/4aawyAB9vmqN3uQ7FjRGTJ');
        });

        // Verifica se o dado é recebido pela promise
        it('Should return the correct data from promise', () => {
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            album.then((data) => {
                expect(data).to.be.eql({ album: 'name' });
             });
        });
    });
    // Fim GetAlbum

    // Inicio GetAlbums
    describe('getAlbums', () => {
        it('Should call fetch metrod', () => {
            const Albums = getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        // Verifica se o Fetch ocorre com a URL desejada
        it('Should call fetch with the correct URL', () => {
            const Albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTJ']);
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albuns/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTJ');
        });

        // Verifica se o dado é recebido pela promise
        it('Should return the correct data from promise', () => {
            const Albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTJ']);
            Albums.then((data) => {
                expect(data).to.be.eql({ album: 'name' });
             });
        });
    });
    // Fim GetAlbums

    //Inicio getAlbumTracks
    // erifica se o Fetch ocorre
    it('Should call fetch method', () => {
        const AlbumTracks = getAlbumTracks();
        expect(stubedFetch).to.have.been.calledOnce;
    });

    // Verifica se o Fetch ocorre com a URL desejada
    it('Should call fetch with the correct URL', () => {
        const AlbumTracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albuns/4aawyAB9vmqN3uQ7FjRGTy/tracks');

    });

    // Verifica se o dado é recebido pela promise
    it('Should return the correct data from promise', () => {
        const AlbumTracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        AlbumTracks.then((data) => {
            expect(data).to.be.eql({ album: 'name' });
         });
    });
});
