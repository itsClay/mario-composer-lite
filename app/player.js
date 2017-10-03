
class Player {
  constructor() {
    this.playing = true;
  }
  // a player is responsible for the loop of the music. It will essentially
  // be a controller for a running loop and have multiple functions around it.
  playCurrentPlaylist(songList){
    // takes in a list of howl sound objects
    songList.forEach( (song) => song.play() );
  }

  play() {
    // activate our play loop

  }

  stop() {
    // this will reset our interval loop to 0 and
  }

}

export default Player;
