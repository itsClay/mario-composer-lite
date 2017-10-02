import * as Sounds from './sounds.js';
import Toolbar from './toolbar';
import Player from './player';
import { Howl } from 'howler';

document.write('this is working from main.js');

document.addEventListener('DOMContentLoaded', function() {

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
    Sounds.sound1.play();
    Toolbar.currentSound = $sound1;
    $sound1.addClass('selected');
    console.log(Toolbar.currentSound);
  });
  $sound2.click(function (){
    Sounds.sound2.play();
    Toolbar.currentSound = $sound2;
  });
  $('#sound3').click(function (){
    Sounds.sound3.play();
  });
  $('#sound4').click(function (){
    Sounds.sound4.play();
  });
  $('#sound5').click(function (){
    console.log('we clicked it!');
    Sounds.sound5.play();
  });

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
