import Store from './store.js';

class Player {
  constructor() {
    this.playing = false;
    this.curPos = 1;
    this.tempo = 1000;
    this.playerLoop = null;
    this.pausePos = null;
  }
  // a player is responsible for the loop of the music. It will essentially
  // be a controller for a running loop and have multiple functions around it.
  playCurrentPlaylist(soundList){
    soundList.forEach( (song) => song.play() );
  }

  play(store) {
    if (!this.playing) {
      this.playing = true;
      this.playerLoop = setInterval( () => {
        if(this.curPos > 16) {
          this.curPos = 1;
        }
        const soundList = store.fetchColumnSounds(this.curPos);
        this.playCurrentPlaylist(soundList);
        this.curPos += 1;
      }, this.tempo );
    }
  }

  pause() {
    this.playing = false;
    clearInterval(this.playerLoop);
    this.pausePos = (( this.curPos / 16 ) * 100 - 6);
  }

  stopAndReset() {
    this.playing = false;
    clearInterval(this.playerLoop);
    this.curPos = 1;
    this.pausePos = null;
  }

  setTempo(tempo) {
    this.tempo = tempo;
  }
}

export default Player;
