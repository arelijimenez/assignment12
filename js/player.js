//albumPlayedMost
class Jukebox {
    constructor(albums) {
        this.albums = [];
        this.albumIndex = -1;
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    setAlbum(i){
        this.albumIndex = i;
    }
    favoriteAlbum = function() {
        let max = -1; 
        let fav; //played the most (counter)
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
    updateMenu = function() {
        let artistAlbum1 = this.albums.map((album, i) => {
            return `<a href="#" onClick="javascript:jbox.setAlbum(${i})">${album.artist} : ${album.title}</a>`;
           
        });
        let div = document.getElementById('dropdown-menu');
        div.innerHTML = artistAlbum1.join('\n');


    }
}

class Album {
    constructor(artist, title) {
        
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. has been played the most. The album has been played ${this.played} times.`;
    }
}

let artistAlbum = [
    ['Operation Ivy', 'Energy'],
    ['Blink 182', 'Dude Ranch'],
    ['New Found Glory', 'Sticks and Stones']
];

var jbox = new Jukebox(); // const player = new player();

for (let i = 0; i < artistAlbum.length; i++) {
    jbox.addAlbum(new Album(artistAlbum[i][0],artistAlbum[i][1]));
}


//console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);

window.addEventListener('load', () => {
    document.getElementById('favoriteAlbum').addEventListener('click', () => {
        console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);
    });

    document.getElementById('playButton').addEventListener('click', () => {
        jbox.albums[jbox.albumIndex].play();
    });
});
document.addEventListener("DOMContentLoaded", function(){
    jbox.updateMenu()
});