import * as Sounds from './sounds';

class Toolbar {
  constructor (){
    this.currentSound = null;
    this.sounds = {
      sound1: {sound: null, selector: $('#sound1'), img: ''},
      sound2: {sound: Sounds.sound2, selector: $('#sound2'), img: 'assets/images/1_mario.png'},
      sound3: {sound: Sounds.sound3, selector: $('#sound3'), img: 'assets/images/2_mushroom.png'},
      sound4: {sound: Sounds.sound4, selector: $('#sound4'), img: 'assets/images/3_yoshi.png'},
      sound5: {sound: Sounds.sound5, selector: $('#sound5'), img: 'assets/images/4_star.png'},
      sound6: {sound: Sounds.sound6, selector: $('#sound6'), img: 'assets/images/5_flower.png'},
      sound7: {sound: Sounds.sound7, selector: $('#sound7'), img: 'assets/images/6_gameboy.png'},
      sound8: {sound: Sounds.sound8, selector: $('#sound8'), img: 'assets/images/7_dog.png'},
      sound9: {sound: Sounds.sound9, selector: $('#sound9'), img: 'assets/images/8_cat.png'},
      sound10: {sound: Sounds.sound10, selector: $('#sound10'), img: 'assets/images/9_pig.png'},
      sound11: {sound: Sounds.sound11, selector: $('#sound11'), img: 'assets/images/10_swan.png'},
      sound12: {sound: Sounds.sound12, selector: $('#sound12'), img: 'assets/images/11_face.png'},
      sound13: {sound: Sounds.sound13, selector: $('#sound13'), img: 'assets/images/12_plane.png'},
      sound14: {sound: Sounds.sound14, selector: $('#sound14'), img: 'assets/images/13_ship.png'},
      sound15: {sound: Sounds.sound15, selector: $('#sound15'), img: 'assets/images/14_car.png'},
      sound16: {sound: Sounds.sound16, selector: $('#sound16'), img: 'assets/images/15_heart.png'},
    };
  }

  setCurrentSound(sound) {
    // sound is a toolbar sound object
    this.currentSound = sound;
    console.log('current selected song: ', this.currentSound);
  }

  addActiveSoundClass($sound) {
    $sound.addClass('active');
  }

  removeActiveSoundClass() {
    $(".toolbar>div.active").removeClass('active');
  }

}

export default Toolbar;
