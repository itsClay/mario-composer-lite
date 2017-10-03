import Store from './store.js';

class Player {
  constructor() {
    this.playing = true;
    this.curPos = 1;
    this.tempo = 1000;
  }
  // a player is responsible for the loop of the music. It will essentially
  // be a controller for a running loop and have multiple functions around it.
  playCurrentPlaylist(songList){
    // takes in a list of howl sound objects
    songList.forEach( (song) => song.play() );
  }

  play(store) {
    // activate our play loop
    setInterval(
      () => {
        if (this.playing) {
          if(this.curPos > 16) {
            this.curPos = 1;
          }
          const sounds = store.fetchColumnSounds(this.curPos);
          sounds.forEach( (sound) => sound.play() );
          console.log(`playing column: ${this.curPos}`);
          this.curPos += 1;
        }
      }, 1000
    );
  }

  stop() {
    this.playing = false;
    // this will reset our interval loop to 0 and
  }
}

export default Player;
