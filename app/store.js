class Store {
  constructor() {
    this.grid = {
        1: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        2: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        3: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        4: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        5: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        6: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        7: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        8: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        9: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        10: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        11: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        12: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        13: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        14: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        15: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
        16: {
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null
        },
      };
    this.addSound = this.addSound.bind(this);
    this.removeSound = this.removeSound.bind(this);
  }



  addSound(col, row, song) {
    song._webAudio = true;

    const audioCtx = new (window.audioCtx || window.webkitAudioContext());
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = 2500;
    oscillator.start();
    // song._rate = 4;

    console.log(song);
    this.grid[col][row] = song;
  }

  removeSound(col, row) {
    this.grid[col][row] = null;
  }

  fetchColumnSounds(col) {
    return Object.keys(this.grid[col]).map(
      (row) => this.grid[col][row]
    ).filter((sound) => Boolean(sound));
  }

}
export default Store;
