import * as Sounds from './sounds.js';
import Toolbar from './toolbar';
import Player from './player';
import Store from './store';
import { Howl } from 'howler';

document.addEventListener('DOMContentLoaded', function() {

  const toolbar = new Toolbar();
  const player = new Player();
  const store = new Store();

  const $sound1 = $('#sound1');
  const $sound2 = $('#sound2');
  const $sound3 = $('#sound3');
  const $sound4 = $('#sound4');
  const $sound5 = $('#sound5');
  const $sound6 = $('#sound6');
  const $sound7 = $('#sound7');
  const $sound8 = $('#sound8');
  const $sound9 = $('#sound9');
  const $sound10 = $('#sound10');
  const $sound11 = $('#sound11');
  const $sound12 = $('#sound12');
  const $sound13 = $('#sound13');
  const $sound14 = $('#sound14');
  const $sound15 = $('#sound15');
  const $sound16 = $('#sound16');

  $sound1.click(function (){
    toolbar.removeActiveSoundClass();
    Sounds.sound1.play();
    toolbar.setCurrentSound(toolbar.sounds.sound1);
    toolbar.addActiveSoundClass($sound1);
    console.log(toolbar);
  });
  $sound2.click(function (){
    toolbar.removeActiveSoundClass();
    Sounds.sound2.play();
    toolbar.setCurrentSound(toolbar.sounds.sound2);
    toolbar.addActiveSoundClass($sound2);
  });
  $sound3.click(function (){
    Sounds.sound3.play();
    toolbar.setCurrentSound($sound3);
  });
  $sound4.click(function (){
    Sounds.sound4.play();
    toolbar.setCurrentSound($sound4);
  });
  $sound5.click(function (){
    Sounds.sound5.play();
    toolbar.setCurrentSound($sound5);
  });
  $sound6.click(function (){
    Sounds.sound6.play();
    toolbar.setCurrentSound($sound6);
  });
  $sound7.click(function (){
    Sounds.sound7.play();
    toolbar.setCurrentSound($sound7);
  });
  $sound8.click(function (){
    Sounds.sound8.play();
    toolbar.setCurrentSound($sound8);
  });
  $sound9.click(function (){
    Sounds.sound9.play();
    toolbar.setCurrentSound($sound9);
  });
  $sound10.click(function (){
    Sounds.sound10.play();
    toolbar.setCurrentSound($sound10);
  });
  $sound11.click(function (){
    Sounds.sound2.play();
    toolbar.setCurrentSound($sound11);
  });
  $sound12.click(function (){
    Sounds.sound12.play();
    toolbar.setCurrentSound($sound12);
  });
  $sound13.click(function (){
    Sounds.sound13.play();
    toolbar.setCurrentSound($sound13);
  });
  $sound14.click(function (){
    Sounds.sound14.play();
    toolbar.setCurrentSound($sound14);
  });
  $sound15.click(function (){
    Sounds.sound15.play();
    toolbar.setCurrentSound($sound15);
  });
  $sound16.click(function (){
    Sounds.sound16.play();
    toolbar.setCurrentSound($sound16);
  });

  $('ul li').click(function(e) {
    // alert($(this).attr('id').split('-'));
    if( toolbar.currentSound ) {
      $(this).html(`<img src=${toolbar.currentSound.img}>`);
    }
  });

  // =========TESTS===========




  $('#play').click(function(e) {
    playLoop();
  });

  function playLoop() {
      let elem = document.getElementById("bar");
      let width = 1;
      let id = setInterval(frame, 10);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
          } else {
              width++;
              elem.style.width = width + '%';
          }
      }
  }

});
