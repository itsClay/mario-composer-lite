<img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1507311319/Screen_Shot_2017-10-06_at_9.56.25_AM_x4zhxy.png">

<a href="https://itsclay.github.io/mario-composer-lite/">https://itsclay.github.io/mario-composer-lite/</a>
# Mario Composer Lite

A fan project from a favorite game that I grew up playing as a child. Users can select a specific mario-related sounds and place them on a sheet of music to compose a song.

<img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1507312212/mario_lite_demo_irdvfb.gif">

## Technologies used
1. Vanilla Javascript and jQuery for structure and handling specific events.
2. Howler.js to handle concurrent sounds and caching.
[Howler Github](https://github.com/goldfire/howler.js/)
3. Webpack to bundle and serve scripts.

## Initial Wireframes
The app will be a single page sound board with a moving line so users can see the timing of their sounds. There will be a tool bar at the top consisting of different sound icons. The music sheet will be a 16 x 6 grid where users may click to place the highlighted icon on the grid. the positions of the icons will not reflect different sound pitches. Finally the lower toolbar will control the play of the sounds.

After a bit of A/B testing with some users, a grid was a preferred style for applying sounds to help users who aren't familiar with the game.

![wireframe](/build/assets/images/mario_lite_wireframe.png)

A snippet handling the handshake of play functionality that handles the start
of the animations and sounds.

```Javascript
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
```

The following 2 snippets show an example of the html and corresponding jQuery function to identify and use what column and row the sound and image should be associated with.

HTML
```html
<div class="column">
  <ul id="col-11">
    <li id="11-1"></li>
    <li id="11-2"></li>
```
JavaScript
```javascript
$('ul li').click(function(e) {
  const [col, row] = $(this).attr('id').split('-');
  if( toolbar.currentSound ) {
    $(this).html(`<img src=${toolbar.currentSound.img}>`);
    store.addSound(col, row, toolbar.currentSound.sound);
  }
});
```

#### Future Features:
1. Add multiple pitches of every sound.
2. Drag and drop icon functionality.
3. Extendable loops for longer songs.
4. Export/import functionality.
