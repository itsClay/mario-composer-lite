# Mario Composer Lite

## Background and Overview
This is a fan project from a favorite game that I grew up playing as a child. Users can select a specific mario-related sounds and place them on a sheet of music to compose a song.

- [ ] Select sounds from a set of icons
- [ ] Start and pause play.
- [ ] Toggle locations on a grid with users icon/sound of their choice.

## Wireframes
The app will be a single page sound board with a moving line so users can see the timing of their sounds. There will be a tool bar at the top consisting of different sound icons. The music sheet will be a 16 x 6 grid where users may click to place the highlighted icon on the grid. the positions of the icons will not reflect different sound pitches. Finally the lower toolbar will control the play of the sounds.

![wireframe](/build/assets/images/mario_lite_wireframe.png)

## Architecture and Technologies
This project will be implemented using the following technologies:
1. Vanilla Javascript and jQuery for structure and handling specific events.
2. Howler.js to handle concurrent sounds and caching.
3. Webpack to bundle and serve scripts.


`player.js` will handle the grid / sheet music functionality, toggle logic.

`sounds.js` will house the mapping objects and sound assignments and serve as a library for player.js

`toolbar.js` will control the playback functionality for the main player.

## Implementation Timeline
#### Over the weekend
- [ ] Complete research of howler tech and how things work.
- [ ] Complete MDNS webaudio testing.

#### Day 1: Learning how to play audio / set up node modules
- [ ] Get audio files up and running on objects and be able to call them on command.
- [ ] Learn how the looping functionality works with howler so I can get audio files to play on a given loop.

#### Day 2: this day will be dedicated to setting up the `player.js` grid and identifying the key properties necessary for easy concurrent playback
- [ ] complete the `sound.js` module
- [ ] rendering square grids on top of line images, with hover grey background functionality so users can identify where they will be putting a sound.
- [ ] Make every part of the grid clickable.

#### Day 3: Dedicated toward the `toolbar.js` functionality. Having play, stop and possibly looping functionality.
- implement logic for the different tools
  - [ ] play
  - [ ] stop
  - [ ] loop
- [ ] require toolbar module into the player and have it be able to listen for the events.

#### Day 4: Styling the frontend and polishing the appearance.
- [ ] clean minimalistic design centered on mario icons and and elegant sheet.

#### Bonus Features:
- Add multiple pitches of every sound.
- Have the grid adjust tons of the sounds based upon the location.
- Drag and drop icon functionality.
- extendable loops for longer songs.
- export/import functionality.
