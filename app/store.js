class Store {
  constructor() {
    this.grid = {
        1: {
          1: 'test sound',
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
    // song should be a pojo with the bg img?
    this.grid[col][row] = song;
    console.log('grid after add: ', this.grid);
  }

  removeSound(col, row) {
    this.grid[col][row] = null;
    console.log('grid after remove: ', this.grid);
  }

  fetchColumnSounds(col) {
    return Object.keys(this.grid[col]).map(
      (row) => this.grid[col][row]
    ).filter( (sound) => !!sound );
  }

}
export default Store;
