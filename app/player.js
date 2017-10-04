import Store from './store.js';

class Player {
  constructor() {
    this.playing = false;
    this.curPos = 1;
    this.tempo = 1000;
    this.playerLoop = null;
  }
  // a player is responsible for the loop of the music. It will essentially
  // be a controller for a running loop and have multiple functions around it.
  playCurrentPlaylist(soundList){
    soundList.forEach( (song) => song.play() );
  }

  play(store) {
    // activate our play loop
    if (!this.playing) {
      this.playing = true;
      this.playerLoop = setInterval( () => {
        if(this.curPos > 16) {
          this.curPos = 1;
        }
        const soundList = store.fetchColumnSounds(this.curPos);
        this.playCurrentPlaylist(soundList);
        console.log(`playing column: ${this.curPos}`);
        this.curPos += 1;
      }, this.tempo );
    }
  }

  pause() {
    // this will reset our playerLoop loop to 0 and
    this.playing = false;
    clearInterval(this.playerLoop);
  }

  stopAndReset() {
    this.playing = false;
    clearInterval(this.playerLoop);
    this.curPos = 1;
  }

  setTempo(tempo) {
    this.tempo = tempo;
    console.log('tempo set to: ', this.tempo);
  }
}

export default Player;
