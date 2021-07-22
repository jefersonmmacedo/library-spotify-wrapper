import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
global.fetch = require('node-fetch');

import {search, searchAlbuns, searchArtists, searchTracks, searchPlaylists} from '../src/search.js';

describe('Search Spotify Wrapper', () => {

    let fetchedStub;
        let promise;

        beforeEach( () => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise =  fetchedStub.resolves({ json: () => ({ album: 'name'}) });
        });

        afterEach( () => {
            fetchedStub.restore();
        });


    describe('Smoke tests', () => {
        it('Should exists the search method', () => {
            expect(search).to.exist;
        });
        it('Should exists the searchAlbuns method', () => {
            expect(searchAlbuns).to.exist;
        });
        it('Should exists the searchArtists method', () => {
            expect(searchArtists).to.exist;
        });
        it('Should exists the searchTracks method', () => {
            expect(searchTracks).to.exist;
        });
        it('Should exists the searchPlaylists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {

        it('Should call fetch function', () => {

            const artists = search();

            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Should', () => {

            context('passing one type', () => {

                const artistis = search('nickelback', 'artist');

                expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=nickelback&type=artist");

                const albuns = search('nickelback', 'album');

                expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=nickelback&type=album");


            });

            context('passing more than type', () => {

                const artistAndAlbums = search('nickelback', ['artist', 'album']);

                expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=nickelback&type=artist,album")

            });
        });


    it('Should return the JSON Data from the Promise', () => {
        promise.resolves({ body: 'json'});

        const artists = search('nickelback', 'artist');

        artists.then((data) => {
            expect(data).to.be.eql({ album: 'name' });
         });
    })

    });

    describe('SearchArtists', () => {
        it('Should call fetch function', () => {
            const artists = searchArtists('nickelback');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Should call fetch with the correct URL', () => {
            const artists = searchArtists('nickelback');
            expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=nickelback&type=artist")
        })
    });

    describe('SearchAlbuns', () => {
        it('Should call fetch function', () => {
            const albuns = searchAlbuns('nickelback');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Should call fetch with the correct URL', () => {
            const albuns = searchAlbuns('nickelback');
            expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=nickelback&type=album")
        })
    });

    describe('SearchTracks', () => {
        it('Should call fetch function', () => {
            const Tracks = searchTracks('nickelback');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Should call fetch with the correct URL', () => {
            const Tracks = searchTracks('nickelback');
            expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=nickelback&type=track")
        })
    });

    describe('SearchPlaylists', () => {
        it('Should call fetch function', () => {
            const Playlists = searchPlaylists('nickelback');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Should call fetch with the correct URL', () => {
            const Playlists = searchPlaylists('nickelback');
            expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=nickelback&type=playlist")
        })
    });


});
