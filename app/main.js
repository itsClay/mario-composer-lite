import * as Sounds from './sounds.js';
import { Howl } from 'howler';

document.write('this is working from main.js');

document.addEventListener('DOMContentLoaded', function() {

  let currentSound;

  let $sound1 = $('#sound1');
  let $sound2 = $('#sound2');
  let $sound3 = $('#sound3');
  let $sound4 = $('#sound4');
  let $sound5 = $('#sound5');
  let $sound6 = $('#sound6');
  let $sound7 = $('#sound7');
  let $sound8 = $('#sound8');
  let $sound9 = $('#sound9');
  let $sound10 = $('#sound10');
  let $sound11 = $('#sound11');
  let $sound12 = $('#sound12');
  let $sound13 = $('#sound13');
  let $sound14 = $('#sound14');
  let $sound15 = $('#sound15');
  let $sound16 = $('#sound16');

  $sound1.click(function (){
    Sounds.sound1.play();
    currentSound = $sound1;
    $sound1.addClass('selected');
    console.log(currentSound);
  });
  $sound2.click(function (){
    Sounds.sound2.play();
    currentSound = $sound2;
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

});
