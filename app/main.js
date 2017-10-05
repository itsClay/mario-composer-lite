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
    toolbar.setCurrentSound(toolbar.sounds.sound1);
    toolbar.addActiveSoundClass($sound1);
    Sounds.sound1.play();
    console.log(toolbar);
  });
  $sound2.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound2);
    toolbar.addActiveSoundClass($sound2);
    Sounds.sound2.play();
  });
  $sound3.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound3);
    toolbar.addActiveSoundClass($sound3);
    Sounds.sound3.play();
  });
  $sound4.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound4);
    toolbar.addActiveSoundClass($sound4);
    Sounds.sound4.play();
  });
  $sound5.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound5);
    toolbar.addActiveSoundClass($sound5);
    Sounds.sound5.play();
  });
  $sound6.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound6);
    toolbar.addActiveSoundClass($sound6);
    Sounds.sound6.play();
  });
  $sound7.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound7);
    toolbar.addActiveSoundClass($sound7);
    Sounds.sound7.play();
  });
  $sound8.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound8);
    toolbar.addActiveSoundClass($sound8);
    Sounds.sound8.play();
  });
  $sound9.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound9);
    toolbar.addActiveSoundClass($sound9);
    Sounds.sound9.play();
  });
  $sound10.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound10);
    toolbar.addActiveSoundClass($sound10);
    Sounds.sound10.play();
  });
  $sound11.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound11);
    toolbar.addActiveSoundClass($sound11);
    Sounds.sound11.play();
  });
  $sound12.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound12);
    toolbar.addActiveSoundClass($sound12);
    Sounds.sound12.play();
  });
  $sound13.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound13);
    toolbar.addActiveSoundClass($sound13);
    Sounds.sound13.play();
  });
  $sound14.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound14);
    toolbar.addActiveSoundClass($sound14);
    Sounds.sound14.play();
  });
  $sound15.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound15);
    toolbar.addActiveSoundClass($sound15);
    Sounds.sound15.play();
  });
  $sound16.click(function (){
    toolbar.removeActiveSoundClass();
    toolbar.setCurrentSound(toolbar.sounds.sound16);
    toolbar.addActiveSoundClass($sound16);
    Sounds.sound16.play();
  });

  $('ul li').click(function(e) {
    const [col, row] = $(this).attr('id').split('-');
    console.log('col and row: ', col, row);
    if( toolbar.currentSound ) {
      $(this).html(`<img src=${toolbar.currentSound.img}>`);
      store.addSound(col, row, toolbar.currentSound.sound);
    }
  });

  const $slider = $('#slider');
  let marioTempo = 16;

  $('#tempo-select').change(function(e) {
    player.stopAndReset();
    $slider.removeClass('playing');
    let tempo = parseInt($(this).val());
    console.log('tempo: ',tempo);
    marioTempo = 16 * (tempo / 1000);
    console.log('mario tempo: ', marioTempo);
    player.setTempo( tempo );
  });

  $('#play').click(function(e) {
    player.play(store);
    if($slider.hasClass('playing')){
      if($('.playing').css('animation-play-state')) {
        $('.playing').css('animation-play-state', 'running');
      }
    } else {
      $slider.addClass('playing').css('animation-duration', `${marioTempo}s`);
    }
  });

  $('#stop').click(function () {
    player.stopAndReset();
    $slider.removeClass('playing');

  });

  $('#pause').click(function () {
    player.pause();
    $('.playing').css('animation-play-state','paused');
  });

});
